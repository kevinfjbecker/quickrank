function showDeckQuality(currentHeroClass) {

    var cards = quickrank.cardranks.getCardsWithRanks(currentHeroClass),
        colors = getColorRanks();

    $('.card').each(function() {
        var name = $(this).text().substring(4),
            rank,
            cardEntry = $.grep(cards, function(c) {
                return name === c.name;
            })[0];

        if (cardEntry) {
            rank = mapValueToRank(cardEntry.value);
            $(this).css({
                'background-color': colors[rank]
            });
        }
    });

    // TODO: these functions should be explosed from imput.js
    function mapValueToRank(value) {
        var n = parseInt(value),
            cappedValue = n > 99 ? 99 : n;
        return Math.floor(cappedValue / 10);
    }

    function getColorRanks() {
        return [
            'rgba(165,0,38,0.4)',
            'rgba(215,48,39,0.4)',
            'rgba(244,109,67,0.4)',
            'rgba(253,174,97,0.4)',
            'rgba(254,224,139,0.4)',
            'rgba(217,239,139,0.4)',
            'rgba(166,217,106,0.4)',
            'rgba(102,189,99,0.4)',
            'rgba(26,152,80,0.4)',
            'rgba(0,104,55,0.4)'
        ];
    }

}