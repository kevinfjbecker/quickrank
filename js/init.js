(function(base){

var g = window
    deck = base.deck;

g.help = base.help;
g.importDeck = base.deckimport.importDeck;
g.loadDeck = base.persistence.loadDeck;
g.saveDeck = base.persistence.saveDeck;
g.enablePlayTracking = base.deckview.enablePlayTracking;
g.clearPlayTracking = base.deckview.clearPlayTracking;

///////////////////////////////////////////////////////////////////////////////

base.curves.updateCurveCharts(deck);
base.deckview.updateDeckList(deck);

}(quickrank));