
quickrank.curves = (function(base) {

///////////////////////////////////////////////////////////////////////////////

var deck = base.deck,
    chartWidth = 130, // only accommodates up to cost 10!
    chartHeight = 80,
    margin = {top: 20, right: 10, bottom: 20, left: 10},
    width = chartWidth - margin.left - margin.right,
    height = chartHeight - margin.top - margin.bottom,
    minionChart = curveChart('#minion-curve'),
    spellChart = curveChart('#spell-curve'),
    weaponChart = curveChart('#weapon-curve'),
    fullChart = curveChart('#full-curve'),
    blockWidth = 10,
    blockHeight = 5,
    baseline = 48;

///////////////////////////////////////////////////////////////////////////////

function curveChart(parentElementSelector) {

  return d3.select(parentElementSelector).append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

}

///////////////////////////////////////////////////////////////////////////////

function updateCurveCharts(deck) {

  var minionCurve = curveByType(deck, getCardTypeFilter('Minion')),
      spellCurve = curveByType(deck, getCardTypeFilter('Spell')),
      weaponCurve = curveByType(deck, getCardTypeFilter('Weapon')),
      fullCurve = curveByType(deck, function(){return true;});

  generateCurveChart(minionChart, minionCurve, 'Minion');
  generateCurveChart(spellChart, spellCurve, 'Spell');
  generateCurveChart(weaponChart, weaponCurve, 'Weapon');
  generateCurveChart(fullChart, fullCurve, 'All Cards');

  updateDynamicChartsAndContent(deck);
}

function curveByType(deck, cardFilter){
  return d3.nest()
  .key(function(c){return c.cost;})
  .entries(deck.filter(cardFilter));
}

function getCardTypeFilter(typeName) {
  return function(card) {
    return card.type.toLowerCase() === typeName.toLowerCase();
  };
}

function getCardMechanicFilter(mechanicName) {
  return function(card) {
    return card.mechanics && card.mechanics.map(function(m){
      return m.toLowerCase();
    }).indexOf(mechanicName.toLowerCase()) > -1;
  };
}

function getCardRaceFilter(raceName) {
  return function(card) {
    return card.race && card.race.toLowerCase() === raceName.toLowerCase();
  };
}

///////////////////////////////////////////////////////////////////////////////

function generateCurveChart(svg, curve, title) {

  var cards = [],
      rects,
      labels;

  if(curve === undefined) {
    return;
  }

  curve.forEach(function(costGroup){
  	costGroup.values.forEach(function(card, index){
      cards.push({i: index, data: card});
  	});
  });

  rects = svg.selectAll('rect')
  .data(cards);
  
  rects.enter().append('rect')
  .attr('width', blockWidth)
  .attr('height', blockHeight);

  rects.attr('x', function(c){
    return +c.data.cost * blockWidth - 0.5;
  })
  .attr('y', function(c){
  	return baseline - blockHeight * (c.i + 1) - 0.5;
  });

  rects.exit().remove();

  labels = svg.selectAll('.cost-axis-label')
  .data(curve, function(d) { return d.key; });

  labels.enter().append('text')
  .attr('x', function(d){return +d.key * blockWidth + blockWidth/2 - 0.5;})
  .attr('y', baseline + 9)
  .classed('cost-axis-label', true)
  .attr('text-anchor', 'middle')
  .text(function(d){return d.key;});

  labels.exit().remove();

  svg.selectAll('.chart-title')
  .data([title])
  .enter().append('text')
  .attr('x', width)
  .attr('text-anchor', 'end')
  .classed('chart-title', true)
  .text(function(d){ return d; });
}

////////////////////////////////////// new code for dynamic card type curves //

function getDeckMechanics(deck) {
  if(deck.length === 0) {
    return [];
  }
  return d3.set(
    deck.filter(function(c) { return c.mechanics !== undefined; })
    .map(function(c) { return c.mechanics; })
    .reduce(function(prev, curr) { return prev.concat(curr); })
  ).values().sort();

}

function getDeckRaces(deck) {
  return d3.set(
    deck.filter(function(c){ return c.race !== undefined; })
    .map(function(c){ return c.race; })
  ).values().sort();
}

function updateDynamicChartsAndContent(deck) {
  var mechanicsCharts = setUpChartSvgCollection(d3.select('#mechanics-curves'), getDeckMechanics(deck)),
      racesCharts = setUpChartSvgCollection(d3.select('#race-curves'), getDeckRaces(deck));

  mechanicsCharts.each(getCurveGenerator(deck, getCardMechanicFilter));
  racesCharts.each(getCurveGenerator(deck, getCardRaceFilter));
}

function setUpChartSvgCollection(containerSelection, data) {
  var charts = containerSelection.selectAll('div').data(data);

  charts.enter().append('div')
    .classed('col-sm-4', true)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    charts.exit().remove();

  return charts;
}

function getCurveGenerator(deck, filterGenerator) {

  return function () {

    var cards = [],
        rects,
        labels,
        svg = d3.select(this).select('g'),
        curve = curveByType(deck, filterGenerator(svg.datum())),
        title = cleanTitleText(svg.datum()),
        titleElement;

    if(curve === undefined) {
      return;
    }

    curve.forEach(function(costGroup){
      costGroup.values.forEach(function(card, index){
        cards.push({i: index, data: card});
      });
    });

    rects = svg.selectAll('rect')
      .data(cards);

    rects.enter().append('rect')
      .attr('width', blockWidth)
      .attr('height', blockHeight);

    rects.attr('x', function(c){
      return +c.data.cost * blockWidth - 0.5;
    })
      .attr('y', function(c){
      return baseline - blockHeight * (c.i + 1) - 0.5;
    });

    rects.exit().remove();

    labels = svg.selectAll('.cost-axis-label')
      .data(curve, function(d) { return d.key; });

    labels.enter().append('text')
      .attr('x', function(d){return +d.key * blockWidth + blockWidth/2 - 0.5;})
      .attr('y', baseline + 9)
      .classed('cost-axis-label', true)
      .attr('text-anchor', 'middle')
      .text(function(d){return d.key;});

    labels.exit().remove();

    titleElement = svg.selectAll('.chart-title')
      .data([title]);
      
    titleElement.enter().append('text')
      .attr('x', width)
      .attr('text-anchor', 'end')
      .classed('chart-title', true);

    titleElement.text(function(d){ return d; });

  };

}

// src: http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function cleanTitleText(s) {
  return s.replace('_', ' ')
    .replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

///////////////////////////////////////////////////////////////////////////////

return {
	updateCurveCharts: updateCurveCharts
};

}(quickrank));
