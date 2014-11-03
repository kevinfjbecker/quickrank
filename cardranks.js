function getCardNames(pHeroClass) {
    return getCardsWithRanks(pHeroClass).map(function (c) {
        return c.name;
    });
}

function getCardsWithRanks(pHeroClass) {

	var perClassList = [
		{
			"name" : "Swipe",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Cenarius",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ancient of Lore",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ancient of War",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Keeper of the Grove",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Starfall",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Druid of the Claw",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Druid"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ironbark Protector",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Power of the Wild",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wrath",
			"value" : "8",
			"heroClass" : "Druid"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Claw",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Starfire",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Druid"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Cult Master",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ogre Magi",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Druid"
		},
		{
			"name" : "Abomination",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nourish",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Druid"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Deathwing",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Force of Nature",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Molten Giant",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bite",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Archmage",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Innervate (max 1-2)",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Savage Roar",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Druid"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mark of Nature",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mark of the Wild",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "3",
			"heroClass" : "Druid"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mana Wraith",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Poison Seeds",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Soul of the Forest",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "War Golem",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wild Growth",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Druid"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Savagery",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Healing Touch",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Naturalize",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Druid"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Moonfire",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Druid"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Gladiator's Longbow",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Explosive Shot",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Savannah Highmane",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Animal Companion",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "King Krush",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Eaglehorn Bow",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Unleash the Hounds",
			"value" : "8",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Deadly Shot",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Multi-Shot",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Webspinner",
			"value" : "7",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Arcane Shot",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Cult Master",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Kill Command",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Tracking",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Violet Teacher",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Explosive Trap",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Houndmaster",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Jungle Panther",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ogre Magi",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Molten Giant",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Abomination",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Arcane Golem",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Flare",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Archmage",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "River Crocolisk",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Tundra Rhino",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Baron Geddon",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Snake Trap",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Scavenging Hyena",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Starving Buzzard",
			"value" : "3",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bestial Wrath",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mana Wraith",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Misdirection",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Freezing Trap",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Hunter's Mark",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mad Scientist",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Snipe",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Timber Wolf",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "War Golem",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Hunter"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Fireball",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Flamestrike",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Frostbolt",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Water Elemental",
			"value" : "9",
			"heroClass" : "Mage"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Blizzard",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Polymorph",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Mage"
		},
		{
			"name" : "Archmage Antonidas",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Amani Berserker",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Raging Worgen",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sorcerer's Apprentice",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Arcane Intellect",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ogre Magi",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Mage"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Kirin Tor Mage",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Archmage",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Cone of Cold",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Duplicate",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mana Wyrm",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Mage"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Deathwing",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Pyroblast",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Abomination",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Counterspell",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mirror Entity",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Mage"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Molten Giant",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Spellbender",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ancient Mage",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Vaporize",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Arcane Missiles",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Mage"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ethereal Arcanist",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mana Wraith",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mad Scientist",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mirror Image",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Mage"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ice Block",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Arcane Explosion",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Frost Nova",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ice Barrier",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ice Lance",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Mage"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Mage"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Tirion Fordring",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Avenging Wrath",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sea Giant",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sword of Justice",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Aldor Peacekeeper",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Consecration",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Truesilver Champion",
			"value" : "9",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Argent Protector",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Blessing of Kings",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Cult Master",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "8",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Maexxna",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Lay on Hands",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Guardian of Kings",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Hammer of Wrath",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Equality",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Violet Teacher",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Blessing of Wisdom",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ogre Magi",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Abomination",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Archmage",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Light's Justice (max 1)",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Baron Geddon",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Molten Giant",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Noble Sacrifice",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Blessed Champion",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Divine Favor",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Holy Wrath",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Blessing of Might",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Hand of Protection",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Humility",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Holy Light",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Redemption",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Repentance",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Eye for an Eye",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Paladin"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Cabal Shadow Priest",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shadow Madness",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dark Cultist",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Holy Nova",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shadow Word: Pain",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Temple Enforcer",
			"value" : "9",
			"heroClass" : "Priest"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Auchenai Soulpriest",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Power Word: Shield",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shadow Word: Death",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Priest"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Maexxna",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Prophet Velen",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Holy Fire",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Lightspawn",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Priest"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Holy Smite",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Priest"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Abomination",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mind Control (max 1)",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Northshire Cleric",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ogre Magi",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Thoughtsteal",
			"value" : "5",
			"heroClass" : "Priest"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Molten Giant",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shadowform",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Archmage",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Priest"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mass Dispel",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mind Vision",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Priest"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mindgames",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mountain Giant",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Lightwarden",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Lightwell",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Argent Squire",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Divine Spirit",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Inner Fire",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Priest"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Circle of Healing",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Silence",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Priest"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Mind Blast",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Priest"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "SI:7 Agent",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Backstab",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Deadly Poison",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Eviscerate",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Molten Giant",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Perdition's Blade",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Assassin's Blade (max 2)",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Assassinate",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "8",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Edwin VanCleef",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Defias Ringleader",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Anub'ar Ambusher",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Betrayal",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ogre Magi",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Shiv",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sprint (max 1)",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Abomination",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Master of Disguise",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Archmage",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Fan of Knives",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Alexstrasza",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Patient Assassin",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Blade Flurry",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Cold Blood",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sap",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Shadowstep",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Rogue"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Conceal",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dread Corsair",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Vanish",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Kidnapper",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Preparation",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Headcrack",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Sinister Strike",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Rogue"
		},
		{
			"name" : "Fire Elemental",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Earth Elemental",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sea Giant",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lightning Storm",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Hex",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stormforged Axe",
			"value" : "9",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Defender of Argus",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Flametongue Totem",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lightning Bolt",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Rockbiter Weapon",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "8",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Doomhammer",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Feral Spirit",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lava Burst",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mana Tide Totem",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Forked Lightning",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Unbound Elemental",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bloodlust (max 1-2)",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ogre Magi",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Abomination",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Archmage",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Al'Akir the Windlord",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ancestral Spirit",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Earth Shock",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Windspeaker",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Baron Geddon",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Molten Giant",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Wailing Soul",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Frost Shock",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Raid Leader",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Reincarnate",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Windfury",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Farsight",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ancestral Healing",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Dust Devil",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Totemic Might",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Shaman"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Flame Imp",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Soulfire",
			"value" : "9",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Lord Jaraxxus",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Molten Giant",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Pit Lord",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Doomguard",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Twilight Drake",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Alexstrasza",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Shadowflame",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Siphon Soul",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Shadow Bolt",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dread Infernal",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Raging Worgen",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Archmage",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Blood Imp",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mortal Coil",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ogre Magi",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Abomination",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Arcane Golem",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Demonfire",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Hellfire",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bane of Doom",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Felguard",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Young Priestess",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Leper Gnome",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Power Overwhelming",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Twisting Nether",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Void Terror",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Drain Life",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Summoning Portal",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Voidcaller",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Voidwalker",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Corruption",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sense Demons",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Succubus",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Sacrificial Pact",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Warlock"
		},
		{
			"name" : "Ragnaros the Firelord",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Gorehowl",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Argent Commander",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Azure Drake",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Frothing Berserker",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Arathi Weaponsmith",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Chillwind Yeti",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Fiery War Axe",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Harvest Golem",
			"value" : "9",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Cairne Bloodhoof",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sylvanas Windrunner",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "The Black Knight",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ysera",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sea Giant",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Imp Master",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Knife Juggler",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sludge Belcher",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stampeding Kodo",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sunwalker",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Acidic Swamp Ooze",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Arcanite Reaper (1-2 max)",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Boulderfist Ogre",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dark Iron Dwarf",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Death's Bite",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Kor'kron Elite",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Scarlet Crusader",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sen'jin Shieldmasta",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Shattered Sun Cleric",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Silver Hand Knight",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Spectral Knight",
			"value" : "8",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Deathwing",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Grommash Hellscream",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Hogger",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Leeroy Jenkins",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Onyxia",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Blood Knight",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Brawl",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Faceless Manipulator",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Molten Giant",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Defender of Argus",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Injured Blademaster",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mind Control Tech",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Twilight Drake",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Violet Teacher",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Cult Master",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Earthen Ring Farseer",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Faerie Dragon",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mad Bomber",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Raging Worgen",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Spellbreaker",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Spiteful Smith",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stormwind Champion",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Venture Co. Mercenary",
			"value" : "7",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Amani Berserker",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ancient Brewmaster",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Cleave",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Cruel Taskmaster",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Fen Creeper",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Gnomish Inventor",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Heroic Strike",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Loot Hoarder",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Slam",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stranglethorn Tiger",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Worgen Infiltrator",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Youthful Brewmaster",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Zombie Chow",
			"value" : "6",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Commanding Shout",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Emperor Cobra",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mortal Strike",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Wild Pyromancer",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Battle Rage",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Bloodfen Raptor",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Bloodsail Raider",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dire Wolf Alpha",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Flesheating Ghoul",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Frost Elemental",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Frostwolf Warlord",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Haunted Creeper",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ogre Magi",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stormwind Knight",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Warsong Commander",
			"value" : "5",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Baron Geddon",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Captain Greenskin",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Gruul",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Illidan Stormrage",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Loatheb",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Maexxna",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Big Game Hunter",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Abomination",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Demolisher",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Gadgetzan Auctioneer",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Sunfury Protector",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Upgrade",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Acolyte of Pain",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Archmage",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Bluegill Warrior",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Darkscale Healer",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Execute",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ironfur Grizzly",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Jungle Panther",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Oasis Snapjaw",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Razorfen Hunter",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Reckless Rocketeer",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stormpike Commando",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Unstable Ghoul",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Wolfrider",
			"value" : "4",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Alexstrasza",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Bloodmage Thalnos",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Feugen",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Harrison Jones",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Malygos",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Arcane Golem",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Crazed Alchemist",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Deathlord",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Master Swordsmith",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Nerubian Egg",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Questing Adventurer",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ravenholdt Assassin",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Wailing Soul",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Abusive Sergeant",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Argent Squire",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dragonling Mechanic",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Gurubashi Berserker",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ironbeak Owl",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ironforge Rifleman",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Kobold Geomancer",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Lord of the Arena",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Novice Engineer",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "River Crocolisk",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Shield Block",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Silvermoon Guardian",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "War Golem",
			"value" : "3",
			"heroClass" : "Warrior"
		},
		{
			"name" : "King Mukla",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Millhouse Manastorm",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Nat Pagle",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "The Beast",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Murloc Warleader",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Shield Slam",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Southsea Captain",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ancient Mage",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Armorsmith",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Bloodsail Corsair",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Pint-Sized Summoner",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Young Priestess",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Booty Bay Bodyguard",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Charge",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dancing Swords",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dread Corsair",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Elven Archer",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Leper Gnome",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Nerub'ar Weblord",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Nightblade",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Priestess of Elune",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Rampage",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Whirlwind",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Windfury Harpy",
			"value" : "2",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Baron Rivendare",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Lorewalker Cho",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Nozdormu",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stalagg",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Tinkmaster Overspark",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Doomsayer",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Hungry Crab",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mountain Giant",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Alarm-o-Bot",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Ancient Watcher",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Angry Chicken",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Coldlight Oracle",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Coldlight Seer",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Lightwarden",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mana Addict",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mana Wraith",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Murloc Tidecaller",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Secretkeeper",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Core Hound",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dalaran Mage",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Dread Corsair",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Frostwolf Grunt",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Inner Rage",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mad Scientist",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Mogu'shan Warden",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Murloc Tidehunter",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Raid Leader",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Shieldbearer",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Silverback Patriarch",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Southsea Deckhand",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stoneskin Gargoyle",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Tauren Warrior",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Thrallmar Farseer",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Voodoo Doctor",
			"value" : "1",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Goldshire Footman",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Grimscale Oracle",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Magma Rager",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Murloc Raider",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Stonetusk Boar",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Undertaker",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Wisp",
			"value" : "0",
			"heroClass" : "Warrior"
		},
		{
			"name" : "Young Dragonhawk",
			"value" : "0",
			"heroClass" : "Warrior"
		}
	];

    return perClassList.filter(function(c){
    	return c.heroClass ===  pHeroClass;
    });

}