quickrank.dataconnector = (function(base) {

  var carddata = base.carddata,

      basicCards = carddata.Basic.filter(function(c){
        return c.collectible !== undefined 
          && c.type !== 'Hero';
      }),
      blackrockCards = carddata["Blackrock Mountain"].filter(function(c){
        return c.collectible !== undefined;
      }),
      classicCards = carddata.Classic.filter(function(c){
        return c.collectible !== undefined
          && c.type !== 'Enchantment'
          && c.name !== 'Adrenaline Rush'; 
      }),
      naxxCards = carddata["Curse of Naxxramas"].filter(function(c){
        return c.collectible !== undefined;
      }),
      gvgCards = carddata["Goblins vs Gnomes"].filter(function(c){
        return c.collectible !== undefined;
      }),
      tgtCards = carddata["The Grand Tournament"].filter(function(c){
        return c.collectible !== undefined;
      }),
      allCards = basicCards
        .concat(blackrockCards)
        .concat(classicCards)
        .concat(naxxCards)
        .concat(gvgCards)
        .concat(tgtCards);

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