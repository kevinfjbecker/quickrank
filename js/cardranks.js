quickrank.cardranks = (function(my) {

    var rankingCollection = my.cardrankCollection;

    function getCardsWithRanks(pHeroClass) {
        return rankingCollection[pHeroClass.toLowerCase()+'Ranks'];
    }

    function getCardNames(pHeroClass) {
        return rankingCollection[pHeroClass.toLowerCase()+'Ranks'].map(function (c) {
            return c.name;
        });
    }

    return {
    	getCardsWithRanks: getCardsWithRanks,
    	getCardNames: getCardNames
    };

}(quickrank));