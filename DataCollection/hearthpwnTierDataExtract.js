var postIDs = [
        '#forum-post-body-3',
        '#forum-post-body-4',
        '#forum-post-body-5',
        '#forum-post-body-6',
        '#forum-post-body-7',
        '#forum-post-body-8',
        '#forum-post-body-9',
        '#forum-post-body-10',
        '#forum-post-body-11'
    ],
    heroClasses = [
        'Druid',
        'Hunter',
        'Mage',
        'Paladin',
        'Priest',
        'Rogue',
        'Shaman',
        'Warlock',
        'Warrior'
    ]


function getTables(pPostID) {
    return $(pPostID).children('table');
}

function getRows(pTable) {
    return $(pTable).find('tr');
}

function getCells(pRow) {
    return $(pRow).children('td');
}

function getCardNameArray(pCells) {
    var a = [],
	    i;
    for(i = 0; i < pCells.length; i = i + 1) {
        a.push($(pCells[i]).text());
    }
    return a;
}

function processTable(pTable) {
    var vRows = getRows(pTable),
	    i,
	    j,
	    vCardNameMatrix = [];
	// i starts at 1 to skip the header row
    for(i = 1; i < vRows.length; i = i + 1) {
        vCardNameMatrix.push(getCardNameArray(getCells(vRows[i])));
    }
    return vCardNameMatrix;
}

function processHeroClass(pPostIndex) {
    var pTables = getTables(postIDs[pPostIndex]),
        i,
        j,
        k,
        pWorkingTable,
        pCardsRanks = [];
    for(i = 0; i < pTables.length; i = i + 1) {
        pWorkingTable = processTable(pTables[i]);
        for(j = 0; j < pWorkingTable.length; j = j + 1) {
            for(k = 0; k < pWorkingTable[j].length; k = k + 1) {
                pCardsRanks.push({
                    name: pWorkingTable[j][k],
                    heroClass: heroClasses[pPostIndex],
                    value: 5 - k
                });
        	}
        }
    }
    return pCardsRanks.filter(function(d){ return /\S/.test(d.name); });
}

function generateFullTierList() {
    var i,
        fullTierList = [];

    for(i = 0; i < postIDs.length; i = i + 1) {
        fullTierList = fullTierList.concat(processHeroClass(i));
    }
    return fullTierList; 
}