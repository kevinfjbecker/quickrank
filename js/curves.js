
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

///////////////////////////////////////////////////////////////////////////////

return {
	updateCurveCharts: updateCurveCharts
};

}(quickrank));
