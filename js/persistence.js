
quickrank.persistence = (function(base){

var my = {},
    deck = base.deck,
    cardByName = base.dataconnector.cardByName,
    updateDeckList = base.deckview.updateDeckList,
    updateCurveCharts = base.curves.updateCurveCharts;

///////////////////////////////////////////////////////////////////////////////

function saveDeck() {
  localStorage.setItem('deck',JSON.stringify(deck.map(function(c){return c.name;})));
}

function loadDeck() {
  var cardNames = JSON.parse(localStorage.getItem('deck'));
  deck.length = 0;
  cardNames.forEach(function(n){deck.push(cardByName(n));});
  updateDeckList(deck);
  updateCurveCharts(deck);
}

my.loadDeck = loadDeck;
my.saveDeck = saveDeck;

return my

}(quickrank));