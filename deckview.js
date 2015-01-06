
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

function clearPlayTracking() {
  $('.card').removeClass('drawn');
}

function enablePlayTracking() {
  $('.card').click(function() {
    $(this).toggleClass('drawn');
  });
}