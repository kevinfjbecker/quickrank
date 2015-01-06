
///////////////////////////////////////////////////////////////////////////////

function saveDeck() {
  localStorage.setItem('deck',JSON.stringify(deck.map(function(c){return c.name;})));
}

function loadDeck() {
  var cardNames = JSON.parse(localStorage.getItem('deck'));
  deck = cardNames.map(function(n){return cardByName(n);})
  updateDeckList(deck);
  updateCurveCharts(deck);
}