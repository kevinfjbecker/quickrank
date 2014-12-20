var deck = [],
    chartWidth = 208,
    chartHeight = 100,
    minionChart = curveChart('#minion-curve'),
    spellChart = curveChart('#spell-curve'),
    weaponChart = curveChart('#weapon-curve'),
    blockWidth = 16,
    blockHeight = 10,
    baseline = 80;

///////////////////////////////////////////////////////////////////////////////

updateCurveCharts(deck);
updateDeckList(deck);

///////////////////////////////////////////////////////////////////////////////

function updateDeckList(deck) {
  var cards = d3.select('#deck-list').selectAll('.card')
  .data(deck.sort(function(a, b){
    return a.cost - b.cost;  
  }));
  
  cards.enter().append('div')
  .classed('card', true);
  
  cards.text(function(c){return c.cost + ' : ' +c.name;});
}


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
});

///////////////////////////////////////////////////////////////////////////////

function curveChart(parentElementSelector) {
  
  var svg = d3.select(parentElementSelector).append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);
  
  return {
    svg: svg,
    blocks: svg.append('g')
  };
}

function updateCurveCharts(deck){

  var minionCurve = curveByType(deck, 'Minion'),
      spellCurve = curveByType(deck, 'Spell'),
      weaponCurve = curveByType(deck, 'Weapon');

  generateCurveChart(minionChart, minionCurve);
  generateCurveChart(spellChart, spellCurve);
  generateCurveChart(weaponChart, weaponCurve);
}

function setRandomCardInput() {
  $('input:text').each(function(index, element){
    $(element).val(randomCard().name);
  });
}

function generateCurveChart(chart, curve){
  
  var rects,
      labels,
      hRule,
      vRule,
      svg = chart.svg,
      blocks = chart.blocks;
  
  if(curve === undefined) {
    return;
  }
  
  rects = blocks.selectAll('rect')
  .data(curve);
  
  rects.enter().append('rect');
  
  rects.data(curve)
  .attr('width', blockWidth)
  .attr('height', function(d){return d.values.length * blockHeight;})
  .attr('x', function(d){return +d.key * blockWidth;})
  .attr('y', function(d){
    return baseline - d.values.length * blockHeight;
  });

  labels = svg.selectAll('text')
  .data(curve.map(function(d){return +d.key;}));
  
  labels.enter().append('text');
  
  labels.attr('x', function(d){return d * blockWidth;})
  .attr('y', baseline + 14)
  .text(function(d){return +d;});

  hRule = svg.selectAll('.h-rule')
  .data(d3.range(maxCostCount(curve)));
  
  hRule.enter().append('line')
  .classed('h-rule', true);
  
  hRule.attr('x1', 0)
  .attr('y1', function(d){
    return baseline - ((d+1) * blockHeight) + 0.5;
  })
  .attr('x2', chartWidth)
  .attr('y2', function(d){
    return baseline - ((d+1) * blockHeight) + 0.5;
  })
  .style('stroke', 'white')
  .style('stroke-width', 1);

  vRule = svg.selectAll('.v-rule')
  .data(d3.range(maxCost(curve)));
  
  vRule.enter().append('line')
  .classed('v-rule', true);
  
  vRule.attr('x1', function(d){
    return ((d+1) * blockWidth) - 0.5;
  })
  .attr('y1', 0)
  .attr('x2', function(d){
    return ((d+1) * blockWidth) - 0.5;
  })
  .attr('y2', chartHeight)
  .style('stroke', 'white')
  .style('stroke-width', 1);

}

///////////////////////////////////////////////////////////////////////////////

function cardByName(name){
  return allCards.filter(function(c){
    return c.name === cleanText(name);
  })[0];
}

function curveByType(deck, cardType){
  
  var curve = d3.nest()
  .key(function(c){return c.type;})
  .key(function(c){return c.cost;})
  .entries(deck)
  .filter(function(a) {
    return a.key === cardType;
  })[0];
  
  return curve && curve.values;
  
}

function maxCost(curve){
  return d3.max(curve,function(d){
    return +d.key;
  });
}

function maxCostCount(curve){
  return d3.max(curve,function(d){
    return d.values.length;
  });
}

function randomDeck() {
  var deck = [],
      i;
  for(i = 0; i < 30; i = i + 1) {
    deck[i] = randomCard();
  }
  return deck;
}

function randomCard() {
  var n = numberOfCards();
  return basicCards()[Math.floor(Math.random() * n)];
}

function numberOfCards() {
  return basicCards().length;
}

function basicCards() {
  return [
    {
      "name" : "Acidic Swamp Ooze",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Ancestral Healing",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Animal Companion",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Arcane Explosion",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Arcane Intellect",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Arcane Missiles",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Arcane Shot",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Arcanite Reaper",
      "type" : "Weapon",
      "cost" : 5
    },
    {
      "name" : "Archmage",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "Assassin's Blade",
      "type" : "Weapon",
      "cost" : 5
    },
    {
      "name" : "Assassinate",
      "type" : "Spell",
      "cost" : 5
    },
    {
      "name" : "Backstab",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Blessing of Kings",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Blessing of Might",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Bloodfen Raptor",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Bloodlust",
      "type" : "Spell",
      "cost" : 5
    },
    {
      "name" : "Bluegill Warrior",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Booty Bay Bodyguard",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Boulderfist Ogre",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "Charge",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Chillwind Yeti",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Claw",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Cleave",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Consecration",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Core Hound",
      "type" : "Minion",
      "cost" : 7
    },
    {
      "name" : "Corruption",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Dalaran Mage",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Darkscale Healer",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Deadly Poison",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Divine Spirit",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Dragonling Mechanic",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Drain Life",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Dread Infernal",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "Elven Archer",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Execute",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Fan of Knives",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Fiery War Axe",
      "type" : "Weapon",
      "cost" : 2
    },
    {
      "name" : "Fire Elemental",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "Fireball",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Flamestrike",
      "type" : "Spell",
      "cost" : 7
    },
    {
      "name" : "Flametongue Totem",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Frost Nova",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Frost Shock",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Frostbolt",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Frostwolf Grunt",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Frostwolf Warlord",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Gnomish Inventor",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Goldshire Footman",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Grimscale Oracle",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Guardian of Kings",
      "type" : "Minion",
      "cost" : 7
    },
    {
      "name" : "Gurubashi Berserker",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Hammer of Wrath",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Hand of Protection",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Healing Touch",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Hellfire",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Heroic Strike",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Hex",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Holy Light",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Holy Nova",
      "type" : "Spell",
      "cost" : 5
    },
    {
      "name" : "Holy Smite",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Houndmaster",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Humility",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Hunter's Mark",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Innervate",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Ironbark Protector",
      "type" : "Minion",
      "cost" : 8
    },
    {
      "name" : "Ironforge Rifleman",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Ironfur Grizzly",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Kill Command",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Kobold Geomancer",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Kor'kron Elite",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Light's Justice",
      "type" : "Weapon",
      "cost" : 1
    },
    {
      "name" : "Lord of the Arena",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "Magma Rager",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Mark of the Wild",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Mind Blast",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Mind Control",
      "type" : "Spell",
      "cost" : 10
    },
    {
      "name" : "Mind Vision",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Mirror Image",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Moonfire",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Mortal Coil",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Multi-Shot",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Murloc Raider",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Murloc Tidehunter",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Nightblade",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Northshire Cleric",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Novice Engineer",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Oasis Snapjaw",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Ogre Magi",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Polymorph",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Power Word: Shield",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Raid Leader",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Razorfen Hunter",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Reckless Rocketeer",
      "type" : "Minion",
      "cost" : 6
    },
    {
      "name" : "River Crocolisk",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Rockbiter Weapon",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Sacrificial Pact",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Sap",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Savage Roar",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Sen'jin Shieldmasta",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Shadow Bolt",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Shadow Word: Death",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Shadow Word: Pain",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Shattered Sun Cleric",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Shield Block",
      "type" : "Spell",
      "cost" : 3
    },
    {
      "name" : "Shiv",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Silverback Patriarch",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Sinister Strike",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Soulfire",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Sprint",
      "type" : "Spell",
      "cost" : 7
    },
    {
      "name" : "Starfire",
      "type" : "Spell",
      "cost" : 6
    },
    {
      "name" : "Starving Buzzard",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Stonetusk Boar",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Stormpike Commando",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Stormwind Champion",
      "type" : "Minion",
      "cost" : 7
    },
    {
      "name" : "Stormwind Knight",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Succubus",
      "type" : "Minion",
      "cost" : 2
    },
    {
      "name" : "Swipe",
      "type" : "Spell",
      "cost" : 4
    },
    {
      "name" : "Timber Wolf",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Totemic Might",
      "type" : "Spell",
      "cost" : 0
    },
    {
      "name" : "Tracking",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Truesilver Champion",
      "type" : "Weapon",
      "cost" : 4
    },
    {
      "name" : "Tundra Rhino",
      "type" : "Minion",
      "cost" : 5
    },
    {
      "name" : "Vanish",
      "type" : "Spell",
      "cost" : 6
    },
    {
      "name" : "Voidwalker",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "Voodoo Doctor",
      "type" : "Minion",
      "cost" : 1
    },
    {
      "name" : "War Golem",
      "type" : "Minion",
      "cost" : 7
    },
    {
      "name" : "Warsong Commander",
      "type" : "Minion",
      "cost" : 3
    },
    {
      "name" : "Water Elemental",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Whirlwind",
      "type" : "Spell",
      "cost" : 1
    },
    {
      "name" : "Wild Growth",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Windfury",
      "type" : "Spell",
      "cost" : 2
    },
    {
      "name" : "Windspeaker",
      "type" : "Minion",
      "cost" : 4
    },
    {
      "name" : "Wolfrider",
      "type" : "Minion",
      "cost" : 3
    }
  ];
}