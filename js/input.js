
(function(my) {

///////////////////////////////////////////////////////////////////////////////

var deck = my.deck,
    getCardNames = my.cardranks.getCardNames,
    updateDeckList = my.deckview.updateDeckList,
    updateCurveCharts = my.curves.updateCurveCharts,
    getCardsWithRanks = my.cardranks.getCardsWithRanks,
    cardByName = my.dataconnector.cardByName,
    rankLookup = (function (heroClass) {

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

    $('#the-basics .typeahead').typeahead({
        autoselect: true
    }, {
        source: lookup
    });

    // Hack to highlight first option.
    // This is to complent the autoselect
    $('#the-basics .typeahead').on('keyup', function(e){
        var keyCode = e.keyCode || e.which;
        if ( keyCode !== 40 && keyCode !== 38 ) {
          $('.tt-suggestion').first().addClass('tt-cursor');
        }

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

///////////////////////////////////////////////////////////////////////////////

$('input:text').on('doubletap', function(e){
  e.preventDefault();
  deck.push(cardByName($(this).val()));
  $('.typeahead').typeahead('val', '');
  updateDeckList(deck);
  updateCurveCharts(deck);
  $('.tt-input').css({
    'background-color': 'transparent',
  });
  $('#the-basics .tt-input').first().focus();
});

///////////////////////////////////////////////////////////////////////////////

$(function(){ // menus layer over other controls
    $('.tt-dropdown-menu').css('z-index', 1080);
});

(function initialize() {
    rankLookup.setCurrentHeroClass('Hunter');
}());

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

}(quickrank));