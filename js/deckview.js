quickrank.deckview = (function(my) {

var that = {},
    deck = my.deck;

///////////////////////////////////////////////////////////////////////////////

that.updateDeckList = function(deck) {
  var cards = d3.select('#deck-list').selectAll('.card')
  .data(deck.sort(cardCompare));
  
  updateCardCount(deck);

  cards.enter().append('div')
  .classed('card', true);
  
  cards.text(function(c){return c.cost + ' : ' +c.name;});

  cards.exit().remove();
}

function updateCardCount(deck) {
  $('#card-count').text(deck.length + '/30');
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

that.clearPlayTracking = function() {
  $('.card').removeClass('drawn');
}

that.enablePlayTracking = function() {
  $('.card').click(function() {
    $(this).toggleClass('drawn');
  });
}

return that;

}(quickrank));