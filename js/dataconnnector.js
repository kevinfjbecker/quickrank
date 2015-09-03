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

  function cleanText(text) {
    return allCards.filter(function(c){
      return text.indexOf(c.name) !== -1;
    }).sort(function lengthDesc(a,b){
      return b.name.length - a.name.length
    })[0].name;
  }

  function cardByName(name){
    return allCards.filter(function(c){
      return c.name === cleanText(name);
    })[0];
  }

  return {
    cleanText: cleanText,
    cardByName: cardByName,
    allCards: allCards
  };

}(quickrank));