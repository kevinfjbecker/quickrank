library("jsonlite")
library("dplyr")

if(!exists("AllSetsList")) {
  AllSetsList <- fromJSON("http://hearthstonejson.com/json/AllSets.json")
}

BasicCards <- filter(AllSetsList[["Basic"]],
                     !is.na(collectible),
                     type != 'Hero')

ClassicCards <- filter(AllSetsList[["Classic"]],
                      !is.na(collectible),
                      type != 'Enchantment',
                      name != 'Adrenaline Rush')

NaxxCards <- filter(AllSetsList[["Curse of Naxxramas"]],
                    !is.na(collectible))

GvgCards <- filter(AllSetsList[["Goblins vs Gnomes"]],
                    !is.na(collectible))
