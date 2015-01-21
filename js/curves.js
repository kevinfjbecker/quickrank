
quickrank.curves = (function(base) {

///////////////////////////////////////////////////////////////////////////////

var deck = base.deck,
    chartWidth = 130,
    chartHeight = 80,
    margin = {top: 20, right: 10, bottom: 20, left: 10},
    width = chartWidth - margin.left - margin.right,
    height = chartHeight - margin.top - margin.bottom,
    minionChart = curveChart('#minion-curve'),
    spellChart = curveChart('#spell-curve'),
    weaponChart = curveChart('#weapon-curve'),
    tauntChart = curveChart('#taunt-curve'),
    mechChart = curveChart('#mech-curve'),
    deathrattleChart = curveChart('#deathrattle-curve'),
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
      tauntCurve = curveByType(deck, getCardMechanicFilter('Taunt')),
      mechCurve = curveByType(deck, getCardRaceFilter('Mech')),
      deathrattleCurve = curveByType(deck, getCardMechanicFilter('Deathrattle')),
      fullCurve = curveByType(deck, function(){return true;});

  generateCurveChart(minionChart, minionCurve, 'Minion');
  generateCurveChart(spellChart, spellCurve, 'Spell');
  generateCurveChart(weaponChart, weaponCurve, 'Weapon');
  generateCurveChart(tauntChart, tauntCurve, 'Taunt');
  generateCurveChart(mechChart, mechCurve, 'Mech');
  generateCurveChart(deathrattleChart, deathrattleCurve, 'Deathrattle');
  generateCurveChart(fullChart, fullCurve, 'All Cards');
}

function curveByType(deck, cardFilter){
  return d3.nest()
  .key(function(c){return c.cost;})
  .entries(deck.filter(cardFilter));
}

function getCardTypeFilter(typeName) {
  return function(card) {
    return card.type === typeName;
  };
}

function getCardMechanicFilter(mechanicName) {
  return function(card) {
    return card.mechanics && card.mechanics.indexOf(mechanicName) > -1;
  };
}

function getCardRaceFilter(raceName) {
  return function(card) {
    return card.race && card.race === 'Mech';
  };
}

///////////////////////////////////////////////////////////////////////////////

function generateCurveChart(svg, curve, title) {

  var cols,
      labels;

  if(curve === undefined) {
    return;
  }

  cols = svg.selectAll('g')
  .data(curve)
  .enter().append('g')
  .attr('transform', function(d){
    var y = baseline - d.values.length * blockHeight,
        x = +d.key * blockWidth;

    return 'translate('+(x-0.5)+','+(y-0.5)+')';
  });

  cols.selectAll('rect')
  .data(function(d){return d.values;})
  .enter().append('rect')
  .attr('width', blockWidth)
  .attr('height', function(d){return blockHeight;})
  .attr('x', 0)
  .attr('y', function(d, i){ return blockHeight * i; });

  labels = svg.selectAll('.cost-axis-label')
  .data(curve.map(function(d){return +d.key;}))
  .enter().append('text')
  .attr('x', function(d){return d * blockWidth + blockWidth/2;})
  .attr('y', baseline + 9)
  .classed('cost-axis-label', true)
  .attr('text-anchor', 'middle')
  .text(function(d){return +d;});

  svg.append('text')
  .attr('x', width)
  .attr('text-anchor', 'end')
  .classed('chart-title', true)
  .text(title);
}

///////////////////////////////////////////////////////////////////////////////

return {
	updateCurveCharts: updateCurveCharts
};

}(quickrank));
