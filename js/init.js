(function(base) {

  var g = window
  deck = base.deck;

  g.help = base.help;
  g.importDeck = base.deckimport.importDeck;
  g.loadDeck = base.persistence.loadDeck;
  g.saveDeck = base.persistence.saveDeck;
  g.enablePlayTracking = base.deckview.enablePlayTracking;
  g.clearPlayTracking = base.deckview.clearPlayTracking;
  g.logRankCounts = base.check.logRankCounts;
  g.logDataCounts = base.check.logDataCounts;


  ///////////////////////////////////////////////////////////////////////////////

  base.curves.updateCurveCharts(deck);
  base.deckview.updateDeckList(deck);

}(quickrank));