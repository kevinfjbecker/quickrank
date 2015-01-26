quickrank.cardranks = (function() {

	my = {};

	my.getCardsWithRanks = function(pHeroClass) {

		var perClassList = ['REPLACE_THIS_ARRAY'];

		return perClassList.filter(function(c){
			return c.heroClass ===  pHeroClass;
		});

	}

	my.getCardNames = function(pHeroClass) {
		return my.getCardsWithRanks(pHeroClass).map(function (c) {
			return c.name;
		});
	}

	return my;

}());