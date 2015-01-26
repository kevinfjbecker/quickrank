
quickrank.deckimport = (function (base) {

  var my = {},
      cardByName = base.dataconnector.cardByName,
      updateDeckList = base.deckview.updateDeckList,
      updateCurveCharts = base.curves.updateCurveCharts,
      deck = base.deck;

///////////////////////////////////////////////////////////////////////////////

my.importDeck = function() {
  $('#decklist-text').attr('rows', 16);
  $('#decklist-text').val(deckList());
  $('#myModal').modal();
}

$('#import-button').click(function(){
  var cardNames = parseDeckList($('#decklist-text').val());
  deck.length = 0;
  cardNames.forEach(function(n){deck.push(cardByName(n));});
  updateDeckList(deck);
  updateCurveCharts(deck);
  $('#myModal').modal('hide');
});

function deckList() {
  var s = '',
      deckList = d3.map();

  deck.forEach(function(c) {
    if(deckList.has(c.name)) {
      deckList.set(c.name, deckList.get(c.name) + 1);
    } else {
      deckList.set(c.name, 1);
    }
  });

  deckList.forEach(function(card, count){ s += count + ' ' + card + '\n'; });

  return s;
}

function parseDeckList(s) {
  var a = s.split('\n').filter(function(s){return s.length > 0;}),
      d = [],
      i,
      n,
      j;

  for (i = 0; i < a.length; i++) {
    n = +a[i].substring(0,1);
    for (j = 0; j < n; j++) {
      d.push(a[i].substring(2));
    };
  };

  return d;
}

return my;

}(quickrank));