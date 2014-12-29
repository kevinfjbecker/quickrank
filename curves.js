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

updateCurveCharts(deck);
updateDeckList(deck);

///////////////////////////////////////////////////////////////////////////////

function updateDeckList(deck) {
  var cards = d3.select('#deck-list').selectAll('.card')
  .data(deck.sort(cardCompare));
  
  cards.enter().append('div')
  .classed('card', true);
  
  cards.text(function(c){return c.cost + ' : ' +c.name;});
}

function cardCompare(a, b) {
    var typeOrder = {
      "Weapon": 1,
      "Spell": 2,
      "Minion": 3
    }
    if(a.cost !== b.cost) {
      return a.cost - b.cost;
    }
    if(a.type !== b.type) {
      return typeOrder[a.type] - typeOrder[b.type];
    }
    return a.name.localeCompare(b.name);
}

///////////////////////////////////////////////////////////////////////////////

function saveDeck() {
  localStorage.setItem('deck',JSON.stringify(deck.map(function(c){return c.name;})));
}

function loadDeck() {
  deckNames = JSON.parse(localStorage.getItem('deck'));
  deck = deckNames.map(function(n){return cardByName(n);})
  updateDeckList(deck);
  updateCurveCharts(deck);
}

///////////////////////////////////////////////////////////////////////////////

function clearPlayTracking() {
  $('.card').removeClass('drawn');
}

function enablePlayTracking() {
  $('.card').click(function() {
    $(this).toggleClass('drawn');
  });
}

///////////////////////////////////////////////////////////////////////////////

$('input:text').on('doubletap', function(e){
  e.preventDefault();
  deck.push(cardByName($(this).val()));
  $('.typeahead').typeahead('val', '');
  updateDeckList(deck);
  updateCurveCharts(deck);
  $('.tt-input').css({
    'background-color': 'transparent',
  });
});

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

function setRandomCardInput() {
  $('input:text').each(function(index, element){
    $(element).val(randomCard().name);
  });
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

function cardByName(name){
  return allCards.filter(function(c){
    return c.name === cleanText(name);
  })[0];
}

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



