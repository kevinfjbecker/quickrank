quickrank.dataconnector = (function(base) {

  var my = {}
      carddata = base.carddata,

      basicCards = carddata.Basic.filter(function(c){
        return c.collectible !== undefined 
          && c.type !== 'Hero';
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
      allCards = basicCards.concat(classicCards).concat(naxxCards).concat(gvgCards);

      my.cleanText = function(text) {
	      return allCards.filter(function(c){
            return text.indexOf(c.name) !== -1;
          })[0].name
      }

      my.cardByName = function(name){
        return allCards.filter(function(c){
          return c.name === my.cleanText(name);
        })[0];
      }

return my;

}(quickrank));