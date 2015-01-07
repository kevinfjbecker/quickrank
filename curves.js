
///////////////////////////////////////////////////////////////////////////////

var deck = [],
    chartWidth = 208,
    chartHeight = 100,
    minionChart = curveChart('#minion-curve'),
    spellChart = curveChart('#spell-curve'),
    weaponChart = curveChart('#weapon-curve'),
    blockWidth = 16,
    blockHeight = 10,
    baseline = 80;

///////////////////////////////////////////////////////////////////////////////

function help() {
  var commands = [
    'importDeck() // open deck list text input',
    'loadDeck() // retrieve deck from localStorage',
    'saveDeck() // put deck in localStorage',
    'enablePlayTracking() // clicking on a card greys it out',
    'clearPlayTracking() // un-grey-out all cards'
  ];
  commands.forEach(function(c){console.log(c)});
}

///////////////////////////////////////////////////////////////////////////////

function curveChart(parentElementSelector) {
  
  var svg = d3.select(parentElementSelector).append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);
  
  return {
    svg: svg,
    blocks: svg.append('g')
  };
}

function updateCurveCharts(deck){

  var minionCurve = curveByType(deck, 'Minion'),
      spellCurve = curveByType(deck, 'Spell'),
      weaponCurve = curveByType(deck, 'Weapon');

  generateCurveChart(minionChart, minionCurve);
  generateCurveChart(spellChart, spellCurve);
  generateCurveChart(weaponChart, weaponCurve);
}

function generateCurveChart(chart, curve){
  
  var rects,
      labels,
      hRule,
      vRule,
      svg = chart.svg,
      blocks = chart.blocks;
  
  if(curve === undefined) {
    return;
  }
  
  rects = blocks.selectAll('rect')
  .data(curve);
  
  rects.enter().append('rect');
  
  rects.data(curve)
  .attr('width', blockWidth)
  .attr('height', function(d){return d.values.length * blockHeight;})
  .attr('x', function(d){return +d.key * blockWidth;})
  .attr('y', function(d){
    return baseline - d.values.length * blockHeight;
  });

  labels = svg.selectAll('text')
  .data(curve.map(function(d){return +d.key;}));
  
  labels.enter().append('text');
  
  labels.attr('x', function(d){return d * blockWidth;})
  .attr('y', baseline + 14)
  .text(function(d){return +d;});

  hRule = svg.selectAll('.h-rule')
  .data(d3.range(maxCostCount(curve)));
  
  hRule.enter().append('line')
  .classed('h-rule', true);
  
  hRule.attr('x1', 0)
  .attr('y1', function(d){
    return baseline - ((d+1) * blockHeight) + 0.5;
  })
  .attr('x2', chartWidth)
  .attr('y2', function(d){
    return baseline - ((d+1) * blockHeight) + 0.5;
  })
  .style('stroke', 'white')
  .style('stroke-width', 1);

  vRule = svg.selectAll('.v-rule')
  .data(d3.range(maxCost(curve)));
  
  vRule.enter().append('line')
  .classed('v-rule', true);
  
  vRule.attr('x1', function(d){
    return ((d+1) * blockWidth) - 0.5;
  })
  .attr('y1', 0)
  .attr('x2', function(d){
    return ((d+1) * blockWidth) - 0.5;
  })
  .attr('y2', chartHeight)
  .style('stroke', 'white')
  .style('stroke-width', 1);

}

///////////////////////////////////////////////////////////////////////////////

function curveByType(deck, cardType){
  
  var curve = d3.nest()
  .key(function(c){return c.type;})
  .key(function(c){return c.cost;})
  .entries(deck)
  .filter(function(a) {
    return a.key === cardType;
  })[0];
  
  return curve && curve.values;
  
}

function maxCost(curve){
  return d3.max(curve,function(d){
    return +d.key;
  });
}

function maxCostCount(curve){
  return d3.max(curve,function(d){
    return d.values.length;
  });
}
