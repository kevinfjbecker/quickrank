################################################ GenerateJerkyAdwctaTierList ##

library(jsonlite)
library(httr)
library(XML)


getPageData <- function(pUrl) {
  
  # Define certicificate file
  cafile <- system.file("CurlSSL", "cacert.pem", package = "RCurl")
  
  # Read page
  GET(
    pUrl, 
    config(cainfo = cafile)
  )
  
}

getCardTable <- function(pPageData) {
  
  tables <- readHTMLTable(content(pPageData, as = 'text'))
  
  tables[[1]]
  
}

processClassTierPage <- function(pCardTable, pHeroClass) {
  
  M <- as.matrix(pCardTable)
  
  gRatings <- c(
    "Beyond Great",
    "Great",
    "Good",
    "Average",
    "Below Average",
    "Bad",
    "Terrible",
    "Beyond Terrible"
  )
  
  ignoreCell <- function(cellText) {
    is.na(cellText) || cellText == "(Value)" || cellText == "(empty)" || cellText == "" || any(gRatings == cellText)
  }
  
  for(i in seq(3, 19, by=2)){
    for(j in 1:nrow(M)){
      if(!ignoreCell(M[j,i])) {
        #       temp <- gRatingsCards[[gActiveRating]]
        #       gRatingsCards[[gActiveRating]] <- c(temp, M[j,i])
        print(paste(M[j,i], "has a value of", M[j,i+1])) # DEBUG
      }
      #else { print(paste("ignoring", M[j,i])) } # DEBUG
    }
  }
  
  #  gCards <- character(0)
  #  gRatings <- numeric(0)
  
  #  for(k in 1:length(gRatingsCards)) {
  #    for(l in 1:length(gRatingsCards[[k]])) {
  #      gRatings <- c(gRatings, 10 - k)
  #      gCards <- c(gCards, gRatingsCards[[k]][[l]])
  #    }
  
  #  pTiers <- data.frame(cbind(gCards, gRatings, pHeroClass))
  #  names(pTiers) <- c("name", "value", "heroClass")
  
  #  pTiers
  
}

#generatePerClassTierList = function() {

gGid <- c(
  1608739244,
  484638083,
  1139706275,
  51256996,
  449654402,
  22822465,
  1385533399,
  1849768973,
  298286057
) 
gHero <- c(
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior"
)

gBaseUrl <- "https://docs.google.com/spreadsheets/d/16Djk1vJCsvDAuihHiwNG_5qzYH_XAA5XsPUYHlA9DEQ/htmlembed/sheet?headers=false&gid="

for(i in 1:1) {
  gUrl <- paste(gBaseUrl, gGid[i], sep = "")
  gPageData <- getPageData(gUrl)
  gCardTable <- getCardTable(gPageData)
  gClassTier <- processClassTierPage(gCardTable, gHero[i])
  #    if(!exists("gTiers")) {
  #      gTiers <- gClassTier
  #    } else {
  #      gTiers <- rbind(gTiers, gClassTier)
  #    }
}

#  gTiers

#}

#gTiers <- generatePerClassTierList()

#gJsonOutput <- prettify(toJSON(gTiers))

#sink("adwctaGunnerTierList.json")
#cat(gJsonOutput)
#sink()