quickrank.dataconnector = (function(base) {

  var allCards = base.carddata;

  function cardByName(name){
    return allCards.filter(function(c){
      return c.name.toUpperCase() === name.toUpperCase();
    })[0];
  }

  return {
    cardByName: cardByName,
    allCards: allCards
  };

}(quickrank));