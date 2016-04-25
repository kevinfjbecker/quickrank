var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://d3js.org/d3.v3.min.js';
document.head.appendChild(script);

function generateClassCardRanks(heroClass) { 
var s = '',
    cards = d3.selectAll('.card'),
    cardNames = cards.select('.cardText')[0].map(c => c && c.innerText),
    cardScores = cards.select('.cardScore')[0].map(c => c && c.innerText),
    classCardRanks = d3.zip(cardNames, cardScores)
      .filter(c => c[0] !== null)
      .map(c => { return { name: c[0], value: c[1], heroClass: heroClass}; });

  s += '(function(my) {'
  s += 'my.cardranks.' + heroClass.toLowerCase() + 'Ranks='  + JSON.stringify(classCardRanks) + ';';
  s += '}(quickrank));';

  return s;
}