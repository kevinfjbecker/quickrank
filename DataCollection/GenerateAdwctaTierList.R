################################################ GenerateAdwctaTierList ##

library(jsonlite)
library(httr)
library(XML)

# Work around for Error in curl::curl_fetch_memory(url, handle = handle) : 
#   Problem with the SSL CA cert (path? access rights?)
# found: http://stackoverflow.com/questions/31293325/r-install-github-fails
set_config( config( ssl_verifypeer = 0L ) ) #


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
  
  pRatingCatagories <- c(
    "Beyond Great",
    "Great",
    "Good",
    "Above Average",
    "Average",
    "Below average",
    "Bad",
    "Terrible",
    "Beyond Terrible"
  )
  
  ignoreCell <- function(cellText) {
    is.na(cellText) || cellText == "(Value)" || cellText == "(empty)" || cellText == "" || any(pRatingCatagories == cellText)
  }
  
  pCards <- character(0)
  pRatings <- character(0)
  
  for(i in seq(3, 19, by=2)){
    for(j in 1:nrow(M)){
      if(!ignoreCell(M[j,i])) {
        pRatings <- c(pRatings, M[j,i+1])
        pCards <- c(pCards, M[j,i])
        # print(paste(M[j,i], "has a value of", M[j,i+1])) # DEBUG
      }
      # else { print(paste("ignoring", M[j,i])) } # DEBUG
    }
  }
  
  pTiers <- data.frame(cbind(pCards, pRatings, pHeroClass))
  names(pTiers) <- c("name", "value", "heroClass")
  
  pTiers
  
}

generatePerClassTierList = function() {

  pGid <- c(
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
  pHero <- c(
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
  
  pBaseUrl <- "https://docs.google.com/spreadsheets/d/10jPQERiCZvBfRCZqCAMyk9ge-7OdlE4JZU1-CVpRrug/htmlembed/sheet?headers=false&gid="
  
  for(i in 1:9) {
    pUrl <- paste(pBaseUrl, pGid[i], sep = "")
    pPageData <- getPageData(pUrl)
    pCardTable <- getCardTable(pPageData)
    pClassTier <- processClassTierPage(pCardTable, pHero[i])
    
    if(!exists("pTiers")) {
      pTiers <- pClassTier
    } else {
      pTiers <- rbind(pTiers, pClassTier)
    } 
  }
  
  pTiers

}

pTiers <- generatePerClassTierList()

gJsonOutput <- prettify(toJSON(pTiers))

sink("adwctaTierList.json")
cat(gJsonOutput)
sink()