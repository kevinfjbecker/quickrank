
quickrank.curves = (function(base) {

///////////////////////////////////////////////////////////////////////////////

var deck = base.deck,
    chartWidth = 208,
    chartHeight = 100,
    minionChart = curveChart('#minion-curve'),
    spellChart = curveChart('#spell-curve'),
    weaponChart = curveChart('#weapon-curve'),
    tauntChart = curveChart('#taunt-curve'),
    mechChart = curveChart('#mech-curve'),
    deathrattleChart = curveChart('#deathrattle-curve'),
    blockWidth = 16,
    blockHeight = 10,
    baseline = 80;

///////////////////////////////////////////////////////////////////////////////

function curveChart(parentElementSelector) {
  
  return d3.select(parentElementSelector).append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);
}

///////////////////////////////////////////////////////////////////////////////

function updateCurveCharts(deck) {

  var minionCurve = curveByType(deck, getCardTypeFilter('Minion')),
      spellCurve = curveByType(deck, getCardTypeFilter('Spell')),
      weaponCurve = curveByType(deck, getCardTypeFilter('Weapon')),
      tauntCurve = curveByType(deck, getCardMechanicFilter('Taunt')),
      mechCurve = curveByType(deck, getCardRaceFilter('Mech')),
      deathrattleCurve = curveByType(deck, getCardMechanicFilter('Deathrattle'));

  generateCurveChart(minionChart, minionCurve);
  generateCurveChart(spellChart, spellCurve);
  generateCurveChart(weaponChart, weaponCurve);
  generateCurveChart(tauntChart, tauntCurve);
  generateCurveChart(mechChart, mechCurve);
  generateCurveChart(deathrattleChart, deathrattleCurve);
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

function generateCurveChart(svg, curve) {

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
    
  labels = svg.selectAll('text')
  .data(curve.map(function(d){return +d.key;}));

  labels.enter().append('text');

  labels.attr('x', function(d){return d * blockWidth;})
  .attr('y', baseline + 14)
  .text(function(d){return +d;});

}

///////////////////////////////////////////////////////////////////////////////

return {
	updateCurveCharts: updateCurveCharts
};

}(quickrank));
