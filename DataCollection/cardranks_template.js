function getCardNames(pHeroClass) {
    return getCardsWithRanks(pHeroClass).map(function (c) {
        return c.name;
    });
}

function getCardsWithRanks(pHeroClass) {

	var perClassList = ['REPLACE_THIS_ARRAY'];

    return perClassList.filter(function(c){
    	return c.heroClass ===  pHeroClass;
    });

}