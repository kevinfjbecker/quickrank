
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
                        matches.push(str);
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
          //$('.tt-suggestion').first().addClass('tt-cursor'); // TODO: fix
        }

    });

    $('#the-basics .typeahead').blur(function (e) {
        var cards = getCardsWithRanks(currentHeroClass),
            colors = getColorRanks(),
            name = e.target.value,
            rank,
            cardEntry = $.grep(cards, function (c) {
                return e.target.value === c.name;
            })[0];

        if (cardEntry) {
            rank = mapValueToRank(cardEntry.value);
            // console.log(rank); // Debug
            $(e.target).css({
                'background-color': colors[rank],
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
  if(!cardByName($(this).val())) {
  	alert('Error: Card not found: "' + $(this).val() + '"');
  	return;
  }
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
    return ['#d73027','#fc8d59','#fee08b','#ffffbf','#d9ef8b','#91cf60','#1a9850'];
}

function mapValueToRank(value) {
    var n = parseInt(value),
        r;

	// console.log(value); // debug

    if(n <= 59) {
        r = 0;
    } else if(60 <= n && n <= 79) {
        r = 1;
    } else if(80 <= n && n <= 94) {
        r = 2;
    } else if(95 <= n && n <= 105) {
        r = 3;
    } else if(106 <= n && n <= 120) {
        r = 4;
    } else if(121 <= n && n <= 140) {
        r = 5;
    } else {
    	r = 6;
    }

	// console.log(r); // debug

    return r;
}

}(quickrank));