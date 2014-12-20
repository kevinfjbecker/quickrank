$(function(){ // menus layer over other controls
	$('.tt-dropdown-menu').css('z-index', 1080);
});

var rankLookup = (function (heroClass) {

    var o = {},
        currentHeroClass = heroClass || 'Mage',
        lookup = (function (strs) {

            var lookupList = strs;

            var f = function (q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(lookupList, function (i, str) {
                    if (substrRegex.test(str)) {
                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({
                            value: str
                        });
                    }
                });

                cb(matches);
            };

            f.setLookupList = function (list) {
                lookupList = list;
            };

            f.getLookupList = function () {
                return lookupList;
            };

            return f;

        }(getCardNames(currentHeroClass)));

    $('#the-basics .typeahead').typeahead({ /* no options */ }, {
        source: lookup
    });

    $('#the-basics .typeahead').blur(function (e) {
        var cards = getCardsWithRanks(currentHeroClass),
            colors = getColorRanks(),
            name = e.target.value,
            cardEntry = $.grep(cards, function (c) {
                return e.target.value === c.name;
            })[0];

        if (cardEntry) {
            $(e.target).css({
                'background-color': colors[cardEntry.value],
            });
        }

    });

    o.getCurrentHeroClass = function () {};

    o.setCurrentHeroClass = function (heroClass) {
        currentHeroClass = heroClass;
        lookup.setLookupList(getCardNames(currentHeroClass));
    };

    return o;

}('Hunter'));

$("#hero-selector button").click(function (e) {
    rankLookup.setCurrentHeroClass($(this).text());
    $("#hero-selector button .active");
    $("#hero-selector .active").toggleClass('active');
    $(this).toggleClass('active');
});

(function initialize() {
    rankLookup.setCurrentHeroClass('Hunter');
}());

 ///////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////// support functions //
 ///////////////////////////////////////////////////////////////////////////////

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