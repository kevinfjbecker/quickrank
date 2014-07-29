function getCardNames(heroClass) {
    return getCardsWithRanks(heroClass).map(function (c) {
        return c.name;
    });
}

function getCardsWithRanks(heroClass) {
    switch (heroClass) {
    case 'Druid':
        return [{
            name: 'Cenarius',
            value: 9
        }, {
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Ancient of Lore',
            value: 9
        }, {
            name: 'Ancient of War',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Keeper of the Grove',
            value: 9
        }, {
            name: 'Starfall',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Druid of the Claw',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Swipe (Always pick)',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Sea Giant',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Dark Iron Dwarf',
            value: 8
        }, {
            name: 'Ironbark Protector',
            value: 8
        }, {
            name: 'Power of the Wild',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Wrath',
            value: 8
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Force of Nature',
            value: 7
        }, {
            name: 'Molten Giant',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Violet Teacher',
            value: 7
        }, {
            name: 'Claw',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Starfire',
            value: 7
        }, {
            name: 'Stormwind Champion',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Ogre Magi',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Abomination',
            value: 5
        }, {
            name: 'Bite',
            value: 5
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Nourish',
            value: 5
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Savage Roar',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Baron Geddon',
            value: 4
        }, {
            name: 'Deathwing',
            value: 4
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Leeroy Jenkins',
            value: 4
        }, {
            name: 'Malygos',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Archmage',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Dire Wolf Alpha',
            value: 4
        }, {
            name: 'Frostwolf Warlord',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Innervate (max 1-2)',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Alexstrasza',
            value: 3
        }, {
            name: 'Bloodmage Thalnos',
            value: 3
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'Illidan Stormrage',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Arcane Golem',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Mark of Nature',
            value: 3
        }, {
            name: 'Mark of the Wild',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'Soul of the Forest',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Mana Wraith',
            value: 2
        }, {
            name: 'Master Swordsmith',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Abusive Sergeant',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'War Golem',
            value: 2
        }, {
            name: 'Wild Growth',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Tinkmaster Overspark',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Savagery',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Dalaran Mage',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Healing Touch',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Naturalize',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Moonfire',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Southsea Deckhand',
            value: 0
        }, {
            name: 'Stonetusk Boar',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Mage':
        return [{
                name: 'Ragnaros the Firelord',
                value: 9
            }, {
                name: 'Ysera',
                value: 9
            }, {
                name: 'Argent Commander',
                value: 9
            }, {
                name: 'Azure Drake',
                value: 9
            }, {
                name: 'Chillwind Yeti',
                value: 9
            }, {
                name: 'Fireball',
                value: 9
            }, {
                name: 'Flamestrike',
                value: 9
            }, {
                name: 'Frostbolt',
                value: 9
            }, {
                name: 'Harvest Golem',
                value: 9
            }, {
                name: 'Water Elemental',
                value: 9
            }, {
                name: 'Cairne Bloodhoof',
                value: 8
            }, {
                name: 'Sylvanas Windrunner',
                value: 8
            }, {
                name: 'The Black Knight',
                value: 8
            }, {
                name: 'Pyroblast',
                value: 8
            }, {
                name: 'Sea Giant',
                value: 8
            }, {
                name: 'Blizzard',
                value: 8
            }, {
                name: 'Defender of Argus',
                value: 8
            }, {
                name: 'Knife Juggler',
                value: 8
            }, {
                name: 'Stampeding Kodo',
                value: 8
            }, {
                name: 'Sunwalker',
                value: 8
            }, {
                name: 'Twilight Drake',
                value: 8
            }, {
                name: 'Violet Teacher',
                value: 8
            }, {
                name: 'Acidic Swamp Ooze',
                value: 8
            }, {
                name: 'Boulderfist Ogre',
                value: 8
            }, {
                name: 'Dark Iron Dwarf',
                value: 8
            }, {
                name: 'Polymorph',
                value: 8
            }, {
                name: 'Scarlet Crusader',
                value: 8
            }, {
                name: 'Sen\'jin Shieldmasta',
                value: 8
            }, {
                name: 'Shattered Sun Cleric',
                value: 8
            }, {
                name: 'Silver Hand Knight',
                value: 8
            }, {
                name: 'Archmage Antonidas',
                value: 7
            }, {
                name: 'Hogger',
                value: 7
            }, {
                name: 'Onyxia',
                value: 7
            }, {
                name: 'Blood Knight',
                value: 7
            }, {
                name: 'Faceless Manipulator',
                value: 7
            }, {
                name: 'Imp Master',
                value: 7
            }, {
                name: 'Injured Blademaster',
                value: 7
            }, {
                name: 'Kirin Tor Mage',
                value: 7
            }, {
                name: 'Amani Berserker',
                value: 7
            }, {
                name: 'Cult Master',
                value: 7
            }, {
                name: 'Earthen Ring Farseer',
                value: 7
            }, {
                name: 'Faerie Dragon',
                value: 7
            }, {
                name: 'Mad Bomber',
                value: 7
            }, {
                name: 'Raging Worgen',
                value: 7
            }, {
                name: 'Sorcerer\'s Apprentice',
                value: 7
            }, {
                name: 'Spellbreaker',
                value: 7
            }, {
                name: 'Stormwind Champion',
                value: 7
            }, {
                name: 'Venture Co. Mercenary',
                value: 7
            }, {
                name: 'Acolyte of Pain',
                value: 6
            }, {
                name: 'Ancient Brewmaster',
                value: 6
            }, {
                name: 'Arcane Intellect',
                value: 6
            }, {
                name: 'Fen Creeper',
                value: 6
            }, {
                name: 'Gnomish Inventor',
                value: 6
            }, {
                name: 'Loot Hoarder',
                value: 6
            }, {
                name: 'Ogre Magi',
                value: 6
            }, {
                name: 'Stranglethorn Tiger',
                value: 6
            }, {
                name: 'Worgen Infiltrator',
                value: 6
            }, {
                name: 'Youthful Brewmaster',
                value: 6
            }, {
                name: 'Counterspell',
                value: 5
            }, {
                name: 'Emperor Cobra',
                value: 5
            }, {
                name: 'Gadgetzan Auctioneer',
                value: 5
            }, {
                name: 'Mind Control Tech',
                value: 5
            }, {
                name: 'Arcane Missiles',
                value: 5
            }, {
                name: 'Archmage',
                value: 5
            }, {
                name: 'Bloodfen Raptor',
                value: 5
            }, {
                name: 'Cone of Cold',
                value: 5
            }, {
                name: 'Flesheating Ghoul',
                value: 5
            }, {
                name: 'Frost Elemental',
                value: 5
            }, {
                name: 'Gurubashi Berserker',
                value: 5
            }, {
                name: 'Jungle Panther',
                value: 5
            }, {
                name: 'Mana Wyrm',
                value: 5
            }, {
                name: 'Spiteful Smith',
                value: 5
            }, {
                name: 'Stormwind Knight',
                value: 5
            }, {
                name: 'Baron Geddon',
                value: 4
            }, {
                name: 'Bloodmage Thalnos',
                value: 4
            }, {
                name: 'Deathwing',
                value: 4
            }, {
                name: 'Gruul',
                value: 4
            }, {
                name: 'Leeroy Jenkins',
                value: 4
            }, {
                name: 'Malygos',
                value: 4
            }, {
                name: 'Big Game Hunter',
                value: 4
            }, {
                name: 'Molten Giant',
                value: 4
            }, {
                name: 'Abomination',
                value: 4
            }, {
                name: 'Demolisher',
                value: 4
            }, {
                name: 'Ravenholdt Assassin',
                value: 4
            }, {
                name: 'Sunfury Protector',
                value: 4
            }, {
                name: 'Vaporize',
                value: 4
            }, {
                name: 'Wild Pyromancer',
                value: 4
            }, {
                name: 'Bluegill Warrior',
                value: 4
            }, {
                name: 'Darkscale Healer',
                value: 4
            }, {
                name: 'Dire Wolf Alpha',
                value: 4
            }, {
                name: 'Frostwolf Warlord',
                value: 4
            }, {
                name: 'Ironfur Grizzly',
                value: 4
            }, {
                name: 'Mirror Entity',
                value: 4
            }, {
                name: 'Oasis Snapjaw',
                value: 4
            }, {
                name: 'Razorfen Hunter',
                value: 4
            }, {
                name: 'Reckless Rocketeer',
                value: 4
            }, {
                name: 'Stormpike Commando',
                value: 4
            }, {
                name: 'Wolfrider',
                value: 4
            }, {
                name: 'Alexstrasza',
                value: 2
            }, {
                name: 'Harrison Jones',
                value: 2
            }, {
                name: 'King Mukla',
                value: 2
            }, {
                name: 'Illidan Stormrage',
                value: 2
            }, {
                name: 'Spellbender',
                value: 2
            }, {
                name: 'Ancient Mage',
                value: 2
            }, {
                name: 'Arcane Golem',
                value: 2
            }, {
                name: 'Crazed Alchemist',
                value: 2
            }, {
                name: 'Pint-Sized Summoner',
                value: 2
            }, {
                name: 'Questing Adventurer',
                value: 2
            }, {
                name: 'Argent Squire',
                value: 2
            }, {
                name: 'Bloodsail Raider',
                value: 2
            }, {
                name: 'Dragonling Mechanic',
                value: 2
            }, {
                name: 'Ironbeak Owl',
                value: 2
            }, {
                name: 'Ironforge Rifleman',
                value: 2
            }, {
                name: 'Kobold Geomancer',
                value: 2
            }, {
                name: 'Lord of the Arena',
                value: 2
            }, {
                name: 'Novice Engineer',
                value: 2
            }, {
                name: 'River Crocolisk',
                value: 2
            }, {
                name: 'Silvermoon Guardian',
                value: 2
            }, {
                name: 'War Golem',
                value: 2
            }, {
                name: 'Captain Greenskin',
                value: 1
            }, {
                name: 'Millhouse Manastorm',
                value: 1
            }, {
                name: 'Nat Pagle',
                value: 1
            }, {
                name: 'The Beast',
                value: 1
            }, {
                name: 'Ice Block',
                value: 1
            }, {
                name: 'Murloc Warleader',
                value: 1
            }, {
                name: 'Southsea Captain',
                value: 1
            }, {
                name: 'Bloodsail Corsair',
                value: 1
            }, {
                name: 'Ethereal Arcanist',
                value: 1
            }, {
                name: 'Mana Wraith',
                value: 1
            }, {
                name: 'Master Swordsmith',
                value: 1
            }, {
                name: 'Young Priestess',
                value: 1
            }, {
                name: 'Abusive Sergeant',
                value: 1
            }, {
                name: 'Booty Bay Bodyguard',
                value: 1
            }, {
                name: 'Dalaran Mage',
                value: 1
            }, {
                name: 'Elven Archer',
                value: 1
            }, {
                name: 'Leper Gnome',
                value: 1
            }, {
                name: 'Mirror Image',
                value: 1
            }, {
                name: 'Mogu\'shan Warden',
                value: 1
            }, {
                name: 'Nightblade',
                value: 1
            }, {
                name: 'Priestess of Elune',
                value: 1
            }, {
                name: 'Tauren Warrior',
                value: 1
            }, {
                name: 'Windfury Harpy',
                value: 1
            }, {
                name: 'Lorewalker Cho',
                value: 0
            }, {
                name: 'Nozdormu',
                value: 0
            }, {
                name: 'Tinkmaster Overspark',
                value: 0
            }, {
                name: 'Doomsayer',
                value: 0
            }, {
                name: 'Hungry Crab',
                value: 0
            }, {
                name: 'Mountain Giant',
                value: 0
            }, {
                name: 'Alarm-o-Bot',
                value: 0
            }, {
                name: 'Ancient Watcher',
                value: 0
            }, {
                name: 'Angry Chicken',
                value: 0
            }, {
                name: 'Coldlight Oracle',
                value: 0
            }, {
                name: 'Coldlight Seer',
                value: 0
            }, {
                name: 'Lightwarden',
                value: 0
            }, {
                name: 'Mana Addict',
                value: 0
            }, {
                name: 'Murloc Tidecaller',
                value: 0
            }, {
                name: 'Secretkeeper',
                value: 0
            }, {
                name: 'Arcane Explosion',
                value: 0
            }, {
                name: 'Core Hound',
                value: 0
            }, {
                name: 'Dread Corsair',
                value: 0
            }, {
                name: 'Frost Nova',
                value: 0
            }, {
                name: 'Frostwolf Grunt',
                value: 0
            }, {
                name: 'Ice Barrier',
                value: 0
            }, {
                name: 'Ice Lance',
                value: 0
            }, {
                name: 'Murloc Tidehunter',
                value: 0
            }, {
                name: 'Raid Leader',
                value: 0
            }, {
                name: 'Shieldbearer',
                value: 0
            }, {
                name: 'Silverback Patriarch',
                value: 0
            }, {
                name: 'Thrallmar Farseer',
                value: 0
            }, {
                name: 'Voodoo Doctor',
                value: 0
            }, {
                name: 'Goldshire Footman',
                value: 0
            }, {
                name: 'Grimscale Oracle',
                value: 0
            }, {
                name: 'Magma Rager',
                value: 0
            }, {
                name: 'Murloc Raider',
                value: 0
            }, {
                name: 'Southsea Deckhand',
                value: 0
            }, {
                name: 'Stonetusk Boar',
                value: 0
            }, {
                name: 'Wisp',
                value: 0
            }, {
                name: 'Young Dragonhawk',
                value: 0
            },

        ];
    case 'Hunter':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Gladiator\'s Longbow',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Explosive Shot',
            value: 9
        }, {
            name: 'Savannah Highmane',
            value: 9
        }, {
            name: 'Animal Companion',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'King Krush',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Sea Giant',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Eaglehorn Bow',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Dark Iron Dwarf',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Unleash the Hounds',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Leeroy Jenkins',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Twilight Drake',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Deadly Shot',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Multi-Shot',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Stormwind Champion',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Arcane Shot',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Kill Command',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Tracking',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Violet Teacher',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Dire Wolf Alpha',
            value: 5
        }, {
            name: 'Explosive Trap',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Houndmaster',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Ogre Magi',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Tundra Rhino',
            value: 5
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Illidan Stormrage',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Molten Giant',
            value: 4
        }, {
            name: 'Snake Trap',
            value: 4
        }, {
            name: 'Abomination',
            value: 4
        }, {
            name: 'Arcane Golem',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Flare',
            value: 4
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Wild Pyromancer',
            value: 4
        }, {
            name: 'Archmage',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Frostwolf Warlord',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'River Crocolisk',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Alexstrasza',
            value: 3
        }, {
            name: 'Baron Geddon',
            value: 3
        }, {
            name: 'Bloodmage Thalnos',
            value: 3
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'King Mukla',
            value: 3
        }, {
            name: 'Malygos',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Abusive Sergeant',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'Reckless Rocketeer',
            value: 3
        }, {
            name: 'Scavenging Hyena',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'Starving Buzzard',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'Bestial Wrath',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Mana Wraith',
            value: 2
        }, {
            name: 'Master Swordsmith',
            value: 2
        }, {
            name: 'Misdirection',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Freezing Trap',
            value: 2
        }, {
            name: 'Hunter\'s Mark',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Snipe',
            value: 2
        }, {
            name: 'Timber Wolf',
            value: 2
        }, {
            name: 'War Golem',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Tinkmaster Overspark',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Dalaran Mage',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Stonetusk Boar',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Southsea Deckhand',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Paladin':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Tirion Fordring',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Avenging Wrath',
            value: 9
        }, {
            name: 'Sea Giant',
            value: 9
        }, {
            name: 'Sword of Justice',
            value: 9
        }, {
            name: 'Aldor Peacekeeper',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Consecration',
            value: 9
        }, {
            name: 'Dark Iron Dwarf',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Truesilver Champion',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Lay on Hands',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Argent Protector',
            value: 8
        }, {
            name: 'Blessing of Kings',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Cult Master',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Stormwind Champion',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Frostwolf Warlord',
            value: 7
        }, {
            name: 'Guardian of Kings',
            value: 7
        }, {
            name: 'Hammer of Wrath',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Equality',
            value: 5
        }, {
            name: 'Violet Teacher',
            value: 5
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Blessing of Wisdom',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Dire Wolf Alpha',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Ogre Magi',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Illidan Stormrage',
            value: 4
        }, {
            name: 'Leeroy Jenkins',
            value: 4
        }, {
            name: 'Malygos',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Molten Giant',
            value: 4
        }, {
            name: 'Abomination',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Archmage',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Light\'s Justice (max 1)',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Alexstrasza',
            value: 3
        }, {
            name: 'Baron Geddon',
            value: 3
        }, {
            name: 'Bloodmage Thalnos',
            value: 3
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'Arcane Golem',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Holy Wrath',
            value: 3
        }, {
            name: 'Master Swordsmith',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Abusive Sergeant',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Noble Sacrifice',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'War Golem',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Tinkmaster Overspark',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Blessed Champion',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Divine Favor',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Blessing of Might',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Hand of Protection',
            value: 2
        }, {
            name: 'Humility',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Redemption',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Mana Wraith',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Dalaran Mage',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Holy Light',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Repentance',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Southsea Deckhand',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Eye for an Eye',
            value: 0
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Stonetusk Boar',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Warrior':
        return [{
                name: 'Ragnaros the Firelord',
                value: 9
            }, {
                name: 'Ysera',
                value: 9
            }, {
                name: 'Gorehowl',
                value: 9
            }, {
                name: 'Argent Commander',
                value: 9
            }, {
                name: 'Azure Drake',
                value: 9
            }, {
                name: 'Frothing Berserker',
                value: 9
            }, {
                name: 'Arathi Weaponsmith',
                value: 9
            }, {
                name: 'Chillwind Yeti',
                value: 9
            }, {
                name: 'Fiery War Axe',
                value: 9
            }, {
                name: 'Harvest Golem',
                value: 9
            }, {
                name: 'Cairne Bloodhoof',
                value: 8
            }, {
                name: 'Sylvanas Windrunner',
                value: 8
            }, {
                name: 'The Black Knight',
                value: 8
            }, {
                name: 'Molten Giant',
                value: 8
            }, {
                name: 'Sea Giant',
                value: 8
            }, {
                name: 'Defender of Argus',
                value: 8
            }, {
                name: 'Knife Juggler',
                value: 8
            }, {
                name: 'Stampeding Kodo',
                value: 8
            }, {
                name: 'Twilight Drake',
                value: 8
            }, {
                name: 'Sunwalker',
                value: 8
            }, {
                name: 'Acidic Swamp Ooze',
                value: 8
            }, {
                name: 'Arcanite Reaper',
                value: 8
            }, {
                name: 'Boulderfist Ogre',
                value: 8
            }, {
                name: 'Dark Iron Dwarf',
                value: 8
            }, {
                name: 'Kor\'kron Elite',
                value: 8
            }, {
                name: 'Scarlet Crusader',
                value: 8
            }, {
                name: 'Sen\'jin Shieldmasta',
                value: 8
            }, {
                name: 'Shattered Sun Cleric',
                value: 8
            }, {
                name: 'Silver Hand Knight',
                value: 8
            }, {
                name: 'Deathwing',
                value: 7
            }, {
                name: 'Grommash Hellscream',
                value: 7
            }, {
                name: 'Hogger',
                value: 7
            }, {
                name: 'Leeroy Jenkins',
                value: 7
            }, {
                name: 'Onyxia',
                value: 7
            }, {
                name: 'Blood Knight',
                value: 7
            }, {
                name: 'Brawl',
                value: 7
            }, {
                name: 'Faceless Manipulator',
                value: 7
            }, {
                name: 'Imp Master',
                value: 7
            }, {
                name: 'Injured Blademaster',
                value: 7
            }, {
                name: 'Mind Control Tech',
                value: 7
            }, {
                name: 'Violet Teacher',
                value: 7
            }, {
                name: 'Cult Master',
                value: 7
            }, {
                name: 'Earthen Ring Farseer',
                value: 7
            }, {
                name: 'Faerie Dragon',
                value: 7
            }, {
                name: 'Mad Bomber',
                value: 7
            }, {
                name: 'Raging Worgen',
                value: 7
            }, {
                name: 'Spellbreaker',
                value: 7
            }, {
                name: 'Spiteful Smith',
                value: 7
            }, {
                name: 'Stormwind Champion',
                value: 7
            }, {
                name: 'Venture Co. Mercenary',
                value: 7
            }, {
                name: 'Amani Berserker',
                value: 6
            }, {
                name: 'Ancient Brewmaster',
                value: 6
            }, {
                name: 'Cleave',
                value: 6
            }, {
                name: 'Cruel Taskmaster',
                value: 6
            }, {
                name: 'Fen Creeper',
                value: 6
            }, {
                name: 'Gnomish Inventor',
                value: 6
            }, {
                name: 'Heroic Strike',
                value: 6
            }, {
                name: 'Loot Hoarder',
                value: 6
            }, {
                name: 'Slam',
                value: 6
            }, {
                name: 'Stranglethorn Tiger',
                value: 6
            }, {
                name: 'Worgen Infiltrator',
                value: 6
            }, {
                name: 'Youthful Brewmaster',
                value: 6
            }, {
                name: 'Commanding Shout',
                value: 5
            }, {
                name: 'Emperor Cobra',
                value: 5
            }, {
                name: 'Mortal Strike',
                value: 5
            }, {
                name: 'Wild Pyromancer',
                value: 5
            }, {
                name: 'Acolyte of Pain',
                value: 5
            }, {
                name: 'Battle Rage',
                value: 5
            }, {
                name: 'Bloodfen Raptor',
                value: 5
            }, {
                name: 'Bloodsail Raider',
                value: 5
            }, {
                name: 'Dire Wolf Alpha',
                value: 5
            }, {
                name: 'Flesheating Ghoul',
                value: 5
            }, {
                name: 'Frost Elemental',
                value: 5
            }, {
                name: 'Frostwolf Warlord',
                value: 5
            }, {
                name: 'Jungle Panther',
                value: 5
            }, {
                name: 'Ogre Magi',
                value: 5
            }, {
                name: 'Spiteful Smith',
                value: 5
            }, {
                name: 'Stormwind Knight',
                value: 5
            }, {
                name: 'Warsong Commander',
                value: 5
            }, {
                name: 'Alexstrasza',
                value: 4
            }, {
                name: 'Baron Geddon',
                value: 4
            }, {
                name: 'Captain Greenskin',
                value: 4
            }, {
                name: 'Gruul',
                value: 4
            }, {
                name: 'Illidan Stormrage',
                value: 4
            }, {
                name: 'Big Game Hunter',
                value: 4
            }, {
                name: 'Abomination',
                value: 4
            }, {
                name: 'Demolisher',
                value: 4
            }, {
                name: 'Gadgetzan Auctioneer',
                value: 4
            }, {
                name: 'Ravenholdt Assassin',
                value: 4
            }, {
                name: 'Sunfury Protector',
                value: 4
            }, {
                name: 'Upgrade',
                value: 4
            }, {
                name: 'Archmage',
                value: 4
            }, {
                name: 'Bluegill Warrior',
                value: 4
            }, {
                name: 'Darkscale Healer',
                value: 4
            }, {
                name: 'Execute',
                value: 4
            }, {
                name: 'Gurubashi Berserker',
                value: 4
            }, {
                name: 'Ironfur Grizzly',
                value: 4
            }, {
                name: 'Oasis Snapjaw',
                value: 4
            }, {
                name: 'Razorfen Hunter',
                value: 4
            }, {
                name: 'Reckless Rocketeer',
                value: 4
            }, {
                name: 'Stormpike Commando',
                value: 4
            }, {
                name: 'Wolfrider',
                value: 4
            }, {
                name: 'Bloodmage Thalnos',
                value: 3
            }, {
                name: 'Harrison Jones',
                value: 3
            }, {
                name: 'Malygos',
                value: 3
            }, {
                name: 'Arcane Golem',
                value: 3
            }, {
                name: 'Crazed Alchemist',
                value: 3
            }, {
                name: 'Master Swordsmith',
                value: 3
            }, {
                name: 'Pint-Sized Summoner',
                value: 3
            }, {
                name: 'Questing Adventurer',
                value: 3
            }, {
                name: 'Abusive Sergeant',
                value: 3
            }, {
                name: 'Argent Squire',
                value: 3
            }, {
                name: 'Dragonling Mechanic',
                value: 3
            }, {
                name: 'Ironbeak Owl',
                value: 3
            }, {
                name: 'Ironforge Rifleman',
                value: 3
            }, {
                name: 'Kobold Geomancer',
                value: 3
            }, {
                name: 'Lord of the Arena',
                value: 3
            }, {
                name: 'Novice Engineer',
                value: 3
            }, {
                name: 'River Crocolisk',
                value: 3
            }, {
                name: 'Shield Block',
                value: 3
            }, {
                name: 'Silvermoon Guardian',
                value: 3
            }, {
                name: 'War Golem',
                value: 3
            }, {
                name: 'King Mukla',
                value: 2
            }, {
                name: 'Millhouse Manastorm',
                value: 2
            }, {
                name: 'Nat Pagle',
                value: 2
            }, {
                name: 'The Beast',
                value: 2
            }, {
                name: 'Murloc Warleader',
                value: 2
            }, {
                name: 'Shield Slam',
                value: 2
            }, {
                name: 'Southsea Captain',
                value: 2
            }, {
                name: 'Ancient Mage',
                value: 2
            }, {
                name: 'Armorsmith',
                value: 2
            }, {
                name: 'Bloodsail Corsair',
                value: 2
            }, {
                name: 'Pint-Sized Summoner',
                value: 2
            }, {
                name: 'Young Priestess',
                value: 2
            }, {
                name: 'Booty Bay Bodyguard',
                value: 2
            }, {
                name: 'Charge',
                value: 2
            }, {
                name: 'Dread Corsair',
                value: 2
            }, {
                name: 'Elven Archer',
                value: 2
            }, {
                name: 'Leper Gnome',
                value: 2
            }, {
                name: 'Mogu\'shan Warden',
                value: 2
            }, {
                name: 'Nightblade',
                value: 2
            }, {
                name: 'Priestess of Elune',
                value: 2
            }, {
                name: 'Rampage',
                value: 2
            }, {
                name: 'Whirlwind',
                value: 2
            }, {
                name: 'Windfury Harpy',
                value: 2
            }, {
                name: 'Lorewalker Cho',
                value: 1
            }, {
                name: 'Nozdormu',
                value: 1
            }, {
                name: 'Tinkmaster Overspark',
                value: 1
            }, {
                name: 'Doomsayer',
                value: 1
            }, {
                name: 'Hungry Crab',
                value: 1
            }, {
                name: 'Mountain Giant',
                value: 1
            }, {
                name: 'Alarm-o-Bot',
                value: 1
            }, {
                name: 'Ancient Watcher',
                value: 1
            }, {
                name: 'Angry Chicken',
                value: 1
            }, {
                name: 'Coldlight Oracle',
                value: 1
            }, {
                name: 'Coldlight Seer',
                value: 1
            }, {
                name: 'Lightwarden',
                value: 1
            }, {
                name: 'Mana Addict',
                value: 1
            }, {
                name: 'Mana Wraith',
                value: 1
            }, {
                name: 'Murloc Tidecaller',
                value: 1
            }, {
                name: 'Secretkeeper',
                value: 1
            }, {
                name: 'Core Hound',
                value: 1
            }, {
                name: 'Dalaran Mage',
                value: 1
            }, {
                name: 'Dread Corsair',
                value: 1
            }, {
                name: 'Frostwolf Grunt',
                value: 1
            }, {
                name: 'Inner Rage',
                value: 1
            }, {
                name: 'Murloc Tidehunter',
                value: 1
            }, {
                name: 'Raid Leader',
                value: 1
            }, {
                name: 'Shieldbearer',
                value: 1
            }, {
                name: 'Silverback Patriarch',
                value: 1
            }, {
                name: 'Southsea Deckhand',
                value: 1
            }, {
                name: 'Tauren Warrior',
                value: 1
            }, {
                name: 'Thrallmar Farseer',
                value: 1
            }, {
                name: 'Voodoo Doctor',
                value: 1
            }, {
                name: 'Goldshire Footman',
                value: 0
            }, {
                name: 'Grimscale Oracle',
                value: 0
            }, {
                name: 'Magma Rager',
                value: 0
            }, {
                name: 'Murloc Raider',
                value: 0
            }, {
                name: 'Stonetusk Boar',
                value: 0
            }, {
                name: 'Wisp',
                value: 0
            }, {
                name: 'Young Dragonhawk',
                value: 0
            },

        ];
    case 'Shaman':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Earth Elemental',
            value: 9
        }, {
            name: 'Sea Giant',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Lightning Storm',
            value: 9
        }, {
            name: 'Fire Elemental (Always pick)',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Dark Iron Dwarf',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Hex',
            value: 9
        }, {
            name: 'Stormforged Axe',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Violet Teacher',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Flametongue Totem',
            value: 8
        }, {
            name: 'Lightning Bolt',
            value: 8
        }, {
            name: 'Rockbiter Weapon',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Stormwind Champion',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Doomhammer',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Feral Spirit',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Lava Burst',
            value: 7
        }, {
            name: 'Mana Tide Totem',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Forked Lightning',
            value: 7
        }, {
            name: 'Frostwolf Warlord',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Unbound Elemental',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Bloodlust (max 1-2)',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Ogre Magi',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Abomination',
            value: 5
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 5
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Archmage',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Dire Wolf Alpha',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Windspeaker',
            value: 5
        }, {
            name: 'Al\'Akir the Windlord',
            value: 4
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Illidan Stormrage',
            value: 4
        }, {
            name: 'Leeroy Jenkins',
            value: 4
        }, {
            name: 'Malygos',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Molten Giant',
            value: 4
        }, {
            name: 'Ancestral Spirit',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Earth Shock',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Alexstrasza',
            value: 3
        }, {
            name: 'Baron Geddon',
            value: 3
        }, {
            name: 'Bloodmage Thalnos',
            value: 3
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'Arcane Golem',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Master Swordsmith',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Abusive Sergeant',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'War Golem',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Tinkmaster Overspark',
            value: 2
        }, {
            name: 'Farsight',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Dalaran Mage',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Frost Shock',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Raid Leader',
            value: 2
        }, {
            name: 'Thrallmar Farseer',
            value: 2
        }, {
            name: 'Windfury',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Mana Wraith',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Ancestral Healing',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Dust Devil',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Southsea Deckhand',
            value: 0
        }, {
            name: 'Stonetusk Boar',
            value: 0
        }, {
            name: 'Totemic Might',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Priest':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Shadow Madness',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Holy Nova',
            value: 9
        }, {
            name: 'Shadow Word: Pain',
            value: 9
        }, {
            name: 'Temple Enforcer',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Cabal Shadow Priest',
            value: 8
        }, {
            name: 'Sea Giant',
            value: 8
        }, {
            name: 'Auchenai Soulpriest',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Injured Blademaster',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Dark Iron Dwarf',
            value: 8
        }, {
            name: 'Power Word: Shield',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shadow Word: Death',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Holy Fire',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Violet Teacher',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Lightspawn',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Stormwind Champion',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Holy Smite',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Mind Control (max 1-2)',
            value: 6
        }, {
            name: 'Northshire Cleric',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Baron Geddon',
            value: 5
        }, {
            name: 'Gruul',
            value: 5
        }, {
            name: 'Illidan Stormrage',
            value: 5
        }, {
            name: 'Leeroy Jenkins',
            value: 5
        }, {
            name: 'Malygos',
            value: 5
        }, {
            name: 'Prophet Velen',
            value: 5
        }, {
            name: 'Big Game Hunter',
            value: 5
        }, {
            name: 'Molten Giant',
            value: 5
        }, {
            name: 'Shadowform',
            value: 5
        }, {
            name: 'Abomination',
            value: 5
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Frostwolf Warlord',
            value: 5
        }, {
            name: 'Gurubashi Berserker',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Ogre Magi',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Thoughtsteal',
            value: 5
        }, {
            name: 'Alexstrasza',
            value: 4
        }, {
            name: 'Bloodmage Thalnos',
            value: 4
        }, {
            name: 'Harrison Jones',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Archmage',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Dire Wolf Alpha',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Arcane Golem',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Mass Dispel',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Mind Vision',
            value: 3
        }, {
            name: 'Mogu\'shan Warden',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'War Golem',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Mindgames',
            value: 2
        }, {
            name: 'Mountain Giant',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Lightwarden',
            value: 2
        }, {
            name: 'Lightwell',
            value: 2
        }, {
            name: 'Master Swordsmith',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Abusive Sergeant',
            value: 2
        }, {
            name: 'Argent Squire',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Divine Spirit',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Inner Fire',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Tinkmaster Overspark',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Mana Wraith',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Circle of Healing',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Dalaran Mage',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silence',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Mind Blast',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Southsea Deckhand',
            value: 0
        }, {
            name: 'Stonetusk Boar',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Rogue':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'SI:7 Agent',
            value: 9
        }, {
            name: 'Backstab',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Deadly Poison',
            value: 9
        }, {
            name: 'Eviscerate',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Molten Giant',
            value: 8
        }, {
            name: 'Sea Giant',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Perdition\'s Blade',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Violet Teacher',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Assassin\'s Blade (max 2)',
            value: 8
        }, {
            name: 'Assassinate',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Dark Iron Dwarf',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Spiteful Smith',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Edwin VanCleef',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Leeroy Jenkins',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Master of Disguise',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Defias Ringleader',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Stormwind Champion',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Betrayal',
            value: 6
        }, {
            name: 'Bloodsail Raider',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Gnomish Inventor',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Ogre Magi',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Shiv',
            value: 6
        }, {
            name: 'Sprint (max 1)',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Abomination',
            value: 5
        }, {
            name: 'Emperor Cobra',
            value: 5
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 5
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Acolyte of Pain',
            value: 5
        }, {
            name: 'Archmage',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Fan of Knives',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Frostwolf Warlord',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Alexstrasza',
            value: 4
        }, {
            name: 'Baron Geddon',
            value: 4
        }, {
            name: 'Bloodmage Thalnos',
            value: 4
        }, {
            name: 'Captain Greenskin',
            value: 4
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Illidan Stormrage',
            value: 4
        }, {
            name: 'Malygos',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Questing Adventurer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Sunfury Protector',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Dire Wolf Alpha',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'Patient Assassin',
            value: 3
        }, {
            name: 'Arcane Golem',
            value: 3
        }, {
            name: 'Blade Flurry',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Abusive Sergeant',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Cold Blood',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Shadowstep',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'Southsea Deckhand',
            value: 3
        }, {
            name: 'War Golem',
            value: 3
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Master Swordsmith',
            value: 2
        }, {
            name: 'Young Priestess',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Conceal',
            value: 2
        }, {
            name: 'Dalaran Mage',
            value: 2
        }, {
            name: 'Dread Corsair',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Leper Gnome',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Sap',
            value: 2
        }, {
            name: 'Vanish',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Tinkmaster Overspark',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Kidnapper',
            value: 1
        }, {
            name: 'Preparation',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Headcrack',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Mana Wraith',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Sinister Strike',
            value: 1
        }, {
            name: 'Stonetusk Boar',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    case 'Warlock':
        return [{
            name: 'Ragnaros the Firelord',
            value: 9
        }, {
            name: 'Ysera',
            value: 9
        }, {
            name: 'Argent Commander',
            value: 9
        }, {
            name: 'Azure Drake',
            value: 9
        }, {
            name: 'Chillwind Yeti',
            value: 9
        }, {
            name: 'Dark Iron Dwarf',
            value: 9
        }, {
            name: 'Flame Imp',
            value: 9
        }, {
            name: 'Harvest Golem',
            value: 9
        }, {
            name: 'Soulfire',
            value: 9
        }, {
            name: 'Cairne Bloodhoof',
            value: 8
        }, {
            name: 'Lord Jaraxxus',
            value: 8
        }, {
            name: 'Sylvanas Windrunner',
            value: 8
        }, {
            name: 'The Black Knight',
            value: 8
        }, {
            name: 'Molten Giant',
            value: 8
        }, {
            name: 'Pit Lord',
            value: 8
        }, {
            name: 'Sea Giant',
            value: 8
        }, {
            name: 'Defender of Argus',
            value: 8
        }, {
            name: 'Knife Juggler',
            value: 8
        }, {
            name: 'Stampeding Kodo',
            value: 8
        }, {
            name: 'Sunwalker',
            value: 8
        }, {
            name: 'Twilight Drake',
            value: 8
        }, {
            name: 'Acidic Swamp Ooze',
            value: 8
        }, {
            name: 'Boulderfist Ogre',
            value: 8
        }, {
            name: 'Scarlet Crusader',
            value: 8
        }, {
            name: 'Sen\'jin Shieldmasta',
            value: 8
        }, {
            name: 'Shadow Bolt',
            value: 8
        }, {
            name: 'Shattered Sun Cleric',
            value: 8
        }, {
            name: 'Silver Hand Knight',
            value: 8
        }, {
            name: 'Deathwing',
            value: 7
        }, {
            name: 'Hogger',
            value: 7
        }, {
            name: 'Leeroy Jenkins',
            value: 7
        }, {
            name: 'Onyxia',
            value: 7
        }, {
            name: 'Alexstrasza',
            value: 7
        }, {
            name: 'Blood Knight',
            value: 7
        }, {
            name: 'Faceless Manipulator',
            value: 7
        }, {
            name: 'Doomguard',
            value: 7
        }, {
            name: 'Imp Master',
            value: 7
        }, {
            name: 'Injured Blademaster',
            value: 7
        }, {
            name: 'Mind Control Tech',
            value: 7
        }, {
            name: 'Shadowflame',
            value: 7
        }, {
            name: 'Siphon Soul',
            value: 7
        }, {
            name: 'Violet Teacher',
            value: 7
        }, {
            name: 'Cult Master',
            value: 7
        }, {
            name: 'Earthen Ring Farseer',
            value: 7
        }, {
            name: 'Faerie Dragon',
            value: 7
        }, {
            name: 'Mad Bomber',
            value: 7
        }, {
            name: 'Spellbreaker',
            value: 7
        }, {
            name: 'Stormwind Champion',
            value: 7
        }, {
            name: 'Venture Co. Mercenary',
            value: 7
        }, {
            name: 'Amani Berserker',
            value: 6
        }, {
            name: 'Ancient Brewmaster',
            value: 6
        }, {
            name: 'Dread Infernal',
            value: 6
        }, {
            name: 'Fen Creeper',
            value: 6
        }, {
            name: 'Loot Hoarder',
            value: 6
        }, {
            name: 'Raging Worgen',
            value: 6
        }, {
            name: 'Stranglethorn Tiger',
            value: 6
        }, {
            name: 'Worgen Infiltrator',
            value: 6
        }, {
            name: 'Youthful Brewmaster',
            value: 6
        }, {
            name: 'Emperor Cobra',
            value: 6
        }, {
            name: 'Sunfury Protector',
            value: 6
        }, {
            name: 'Wild Pyromancer',
            value: 5
        }, {
            name: 'Archmage',
            value: 5
        }, {
            name: 'Blood Imp',
            value: 5
        }, {
            name: 'Bloodfen Raptor',
            value: 5
        }, {
            name: 'Dire Wolf Alpha',
            value: 5
        }, {
            name: 'Flesheating Ghoul',
            value: 5
        }, {
            name: 'Frost Elemental',
            value: 5
        }, {
            name: 'Frostwolf Warlord',
            value: 5
        }, {
            name: 'Gnomish Inventor',
            value: 5
        }, {
            name: 'Jungle Panther',
            value: 5
        }, {
            name: 'Ogre Magi',
            value: 5
        }, {
            name: 'Spiteful Smith',
            value: 5
        }, {
            name: 'Stormwind Knight',
            value: 5
        }, {
            name: 'Baron Geddon',
            value: 4
        }, {
            name: 'Gruul',
            value: 4
        }, {
            name: 'Illidan Stormrage',
            value: 4
        }, {
            name: 'Malygos',
            value: 4
        }, {
            name: 'Big Game Hunter',
            value: 4
        }, {
            name: 'Abomination',
            value: 4
        }, {
            name: 'Arcane Golem',
            value: 4
        }, {
            name: 'Demolisher',
            value: 4
        }, {
            name: 'Gadgetzan Auctioneer',
            value: 4
        }, {
            name: 'Ravenholdt Assassin',
            value: 4
        }, {
            name: 'Acolyte of Pain',
            value: 4
        }, {
            name: 'Bluegill Warrior',
            value: 4
        }, {
            name: 'Darkscale Healer',
            value: 4
        }, {
            name: 'Demonfire',
            value: 4
        }, {
            name: 'Gurubashi Berserker',
            value: 4
        }, {
            name: 'Hellfire',
            value: 4
        }, {
            name: 'Ironfur Grizzly',
            value: 4
        }, {
            name: 'Mortal Coil',
            value: 4
        }, {
            name: 'Oasis Snapjaw',
            value: 4
        }, {
            name: 'Razorfen Hunter',
            value: 4
        }, {
            name: 'Reckless Rocketeer',
            value: 4
        }, {
            name: 'Stormpike Commando',
            value: 4
        }, {
            name: 'Wolfrider',
            value: 4
        }, {
            name: 'Bloodmage Thalnos',
            value: 3
        }, {
            name: 'Harrison Jones',
            value: 3
        }, {
            name: 'Bane of Doom',
            value: 3
        }, {
            name: 'Crazed Alchemist',
            value: 3
        }, {
            name: 'Felguard',
            value: 3
        }, {
            name: 'Master Swordsmith',
            value: 3
        }, {
            name: 'Pint-Sized Summoner',
            value: 3
        }, {
            name: 'Questing Adventurer',
            value: 3
        }, {
            name: 'Young Priestess',
            value: 3
        }, {
            name: 'Abusive Sergeant',
            value: 3
        }, {
            name: 'Argent Squire',
            value: 3
        }, {
            name: 'Bloodsail Raider',
            value: 3
        }, {
            name: 'Dragonling Mechanic',
            value: 3
        }, {
            name: 'Ironbeak Owl',
            value: 3
        }, {
            name: 'Ironforge Rifleman',
            value: 3
        }, {
            name: 'Kobold Geomancer',
            value: 3
        }, {
            name: 'Leper Gnome',
            value: 3
        }, {
            name: 'Lord of the Arena',
            value: 3
        }, {
            name: 'Novice Engineer',
            value: 3
        }, {
            name: 'Power Overwhelming',
            value: 3
        }, {
            name: 'River Crocolisk',
            value: 3
        }, {
            name: 'Silvermoon Guardian',
            value: 3
        }, {
            name: 'Voidwalker',
            value: 3
        }, {
            name: 'War Golem',
            value: 3
        }, {
            name: 'Captain Greenskin',
            value: 2
        }, {
            name: 'King Mukla',
            value: 2
        }, {
            name: 'Millhouse Manastorm',
            value: 2
        }, {
            name: 'Nat Pagle',
            value: 2
        }, {
            name: 'The Beast',
            value: 2
        }, {
            name: 'Murloc Warleader',
            value: 2
        }, {
            name: 'Southsea Captain',
            value: 2
        }, {
            name: 'Twisting Nether',
            value: 2
        }, {
            name: 'Ancient Mage',
            value: 2
        }, {
            name: 'Bloodsail Corsair',
            value: 2
        }, {
            name: 'Void Terror',
            value: 2
        }, {
            name: 'Booty Bay Bodyguard',
            value: 2
        }, {
            name: 'Drain Life',
            value: 2
        }, {
            name: 'Elven Archer',
            value: 2
        }, {
            name: 'Mogu\'shan Warden',
            value: 2
        }, {
            name: 'Nightblade',
            value: 2
        }, {
            name: 'Priestess of Elune',
            value: 2
        }, {
            name: 'Summoning Portal',
            value: 2
        }, {
            name: 'Windfury Harpy',
            value: 2
        }, {
            name: 'Lorewalker Cho',
            value: 1
        }, {
            name: 'Nozdormu',
            value: 1
        }, {
            name: 'Tinkmaster Overspark',
            value: 1
        }, {
            name: 'Doomsayer',
            value: 1
        }, {
            name: 'Hungry Crab',
            value: 1
        }, {
            name: 'Mountain Giant',
            value: 1
        }, {
            name: 'Alarm-o-Bot',
            value: 1
        }, {
            name: 'Ancient Watcher',
            value: 1
        }, {
            name: 'Angry Chicken',
            value: 1
        }, {
            name: 'Coldlight Oracle',
            value: 1
        }, {
            name: 'Coldlight Seer',
            value: 1
        }, {
            name: 'Lightwarden',
            value: 1
        }, {
            name: 'Mana Addict',
            value: 1
        }, {
            name: 'Mana Wraith',
            value: 1
        }, {
            name: 'Murloc Tidecaller',
            value: 1
        }, {
            name: 'Secretkeeper',
            value: 1
        }, {
            name: 'Core Hound',
            value: 1
        }, {
            name: 'Corruption',
            value: 1
        }, {
            name: 'Dalaran Mage',
            value: 1
        }, {
            name: 'Dread Corsair',
            value: 1
        }, {
            name: 'Frostwolf Grunt',
            value: 1
        }, {
            name: 'Murloc Tidehunter',
            value: 1
        }, {
            name: 'Raid Leader',
            value: 1
        }, {
            name: 'Sense Demons',
            value: 1
        }, {
            name: 'Shieldbearer',
            value: 1
        }, {
            name: 'Silverback Patriarch',
            value: 1
        }, {
            name: 'Succubus',
            value: 1
        }, {
            name: 'Tauren Warrior',
            value: 1
        }, {
            name: 'Thrallmar Farseer',
            value: 1
        }, {
            name: 'Voodoo Doctor',
            value: 1
        }, {
            name: 'Goldshire Footman',
            value: 0
        }, {
            name: 'Grimscale Oracle',
            value: 0
        }, {
            name: 'Magma Rager',
            value: 0
        }, {
            name: 'Murloc Raider',
            value: 0
        }, {
            name: 'Sacrificial Pact',
            value: 0
        }, {
            name: 'Southsea Deckhand',
            value: 0
        }, {
            name: 'Stonetusk Boar',
            value: 0
        }, {
            name: 'Wisp',
            value: 0
        }, {
            name: 'Young Dragonhawk',
            value: 0
        }];
    default:
        return [];
    }
}