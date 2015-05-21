
///////////////////////////////////////////////////////////////////////////////

var quickrank = (function() {

  var my = {};

  my.deck = [];

///////////////////////////////////////////////////////////////////////////////

  my.help = function() {
    var commands = [
      'importDeck() // open deck list text input',
      'loadDeck() // retrieve deck from localStorage',
      'saveDeck() // put deck in localStorage',
      'enablePlayTracking() // clicking on a card greys it out',
      'clearPlayTracking() // un-grey-out all cards',
      'logDataCounts() // log card data count per class',
      'logRankCounts() // log card rank count per class'
    ];
    commands.forEach(function(c){console.log(c)});
  }

  return my;

}());