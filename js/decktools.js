(function(base){

///////////////////////////////////////////////////////////////////////////////

  $('#save-deck').click(base.persistence.saveDeck);
  $('#load-deck').click(base.persistence.loadDeck);
  $('#import-deck').click(base.deckimport.importDeck);
  $('#enable-tracking').click(base.deckview.enablePlayTracking);
  $('#clear-tracking').click(base.deckview.clearPlayTracking);

}(quickrank));