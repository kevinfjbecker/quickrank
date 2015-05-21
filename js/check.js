quickrank.check = (function(base) {

  var carddata = base.carddata,
    allCards = quickrank.dataconnector.allCards,
    getCardNames = quickrank.cardranks.getCardNames,
    heroClasses = [
      "Druid",
      "Hunter",
      "Mage",
      "Paladin",
      "Priest",
      "Rogue",
      "Shaman",
      "Warlock",
      "Warrior"
    ];

  function rankCounts() {
    return heroClasses.map(function(hero){
      return {
        heroClass: hero,
        cardCount: getCardNames(hero).length
      };
    });
  }

  function dataCounts() {
    return heroClasses.map(function(hero) {
      return {
        heroClass: hero,
        cardCount: cardDataCount(hero)
      };
    });
  }

  function cardDataCount(heroClass) {
    return allCards.filter(function(card) {
      return card.playerClass === undefined || card.playerClass === heroClass;
    }).length;
  }

  function logDataCounts() {
    dataCounts().forEach(function(c){
      console.log(c.cardCount + ' ' + c.heroClass);
    });
  }

  function logRankCounts() {
    rankCounts().forEach(function(c){
      console.log(c.cardCount + ' ' + c.heroClass);
    });
  }

  return {
    rankCounts: rankCounts,
    dataCounts: dataCounts,
    logDataCounts: logDataCounts,
    logRankCounts: logRankCounts
  };

}(quickrank));