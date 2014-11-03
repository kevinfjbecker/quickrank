################################################ GenerateAnt1gravityTierList ##


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
  
  tables[[2]]
  
}

processClassTierPage <- function(pCardTable, pHeroClass) {
  
  M <- as.matrix(pCardTable)
  
  gRatings <- c(
    "Top",
    "Great",
    "Good",
    "Usually Good",
    "Above Average",
    "Average",
    "Below average",
    "Usually Bad",
    "Bad",
    "Terrible"
  )
  
  gIgnoreText = c(gRatings, "Tier 1", "Tier 2", "Tier 3", "")
  
  gRatingsCards <- list(
    Top = character(0),
    Great = character(0),
    Good = character(0),
    UsuallyGood = character(0),
    AboveAverage = character(0),
    Average = character(0),
    BelowAverage = character(0),
    UsuallyBad = character(0),
    Bad = character(0),
    Terrible = character(0)
  )
  
  for(i in 3:12){
    gActiveRating = i-2
    for(j in 1:nrow(M)){
      if(!any(gIgnoreText == M[j,i])) {
        temp <- gRatingsCards[[gActiveRating]]
        gRatingsCards[[gActiveRating]] <- c(temp, M[j,i])
        # print(paste("adding", M[j,i], "to", gRatings[gActiveRating])) # DEBUG
      }
      # else { print(paste("ignoring", M[j,i])) } # DEBUG
    }
  }
  
  gCards <- character(0)
  gRatings <- numeric(0)
  
  for(k in 1:length(gRatingsCards)) {
    for(l in 1:length(gRatingsCards[[k]])) {
      gRatings <- c(gRatings, 10 - k)
      gCards <- c(gCards, gRatingsCards[[k]][[l]])
    }
  }
  
  pTiers <- data.frame(cbind(gCards, gRatings, pHeroClass))
  names(pTiers) <- c("name", "value", "heroClass")
  
  pTiers
  
}

generatePerClassTierList = function() {
  
  gGid <- c(5, 9, 6, 8, 12, 4,7, 11, 10) 
  gHero <- c("Druid", "Hunter", "Mage",
             "Paladin", "Priest", "Rogue",
             "Shaman", "Warlock", "Warrior"
  )
  
  gBaseUrl <- "https://docs.google.com/spreadsheet/pub"
  gQuery <-"?key=0AhaXYbyLVAVodDRrbXZCUzVNNWs0bzI0a09aaF9iRnc&gid="
  
  for(i in 1:9) {
    gUrl <- paste(gBaseUrl, gQuery, gGid[i], sep = "")
    gPageData <- getPageData(gUrl)
    gCardTable <- getCardTable(gPageData)
    gClassTier <- processClassTierPage(gCardTable, gHero[i])
    if(!exists("gTiers")) {
      gTiers <- gClassTier
    } else {
      gTiers <- rbind(gTiers, gClassTier)
    }
  }
  
  gTiers
  
}

gTiers <- generatePerClassTierList()

gJsonOutput <- prettify(toJSON(gTiers))

sink("jerkyGunnerTierList.json")
cat(gJsonOutput)
sink()