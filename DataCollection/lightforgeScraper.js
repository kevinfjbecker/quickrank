var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
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
  s += 'my.cardrankCollection.' + heroClass.toLowerCase() + 'Ranks='  + JSON.stringify(classCardRanks) + ';';
  s += '}(quickrank));';

  return s;
}