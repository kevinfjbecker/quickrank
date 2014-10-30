################################################ GenerateAnt1gravityTierList ##


library(jsonlite)
library("httr")
library("XML")


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

processClassTierPage <- function(pCardTable) {
  
  M <- as.matrix(pCardTable)
  
  gRatings <- c(
    "Always pick",
    "Top",
    "Great",
    "Good",
    "Usually Good",
    "Above Average",
    "Average",
    "Below Average",
    "Usually Bad",
    "Bad",
    "Terrible"
  )
  
  gRatingsCards <- list(
    AlwaysPick = character(0),
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
  
  gActiveRating <- -1
  
  
  
  for(i in 1:ncol(M)){
    for(j in 1:nrow(M)){
      
      # print(M[j,i]) # DEBUG
      
      # Start Collection Group
      if(gActiveRating != -1 & M[j,i] != "") {
        # print(paste("Add ", M[j,i], "to", gRatings[gActiveRating])) # DEBUG
        temp <- gRatingsCards[[gActiveRating]]
        gRatingsCards[[gActiveRating]] <- c(temp, M[j,i])
      }
      
      # 
      if(!is.na(match(M[j,i], gRatings))) {
        gActiveRating <- match(M[j,i], gRatings)
        # print(paste("Start:", gRatings[gActiveRating])) # DEBUG
      }
      
      # End Collection Group
      if(gActiveRating != -1 & M[j,i] == "") {
        # print(paste("End:", gRatings[gActiveRating])) # DEBUG
        gActiveRating <- -1
      } 
      
    }
  }
  
  # print(paste(length(gTopCards), "'top' cards")) # DEBUG
  
  gCards <- character(0)
  gRatings <- numeric(0)
  
  for(k in 1:length(gRatingsCards)) {
    for(l in 1:length(gRatingsCards[[k]])) {
      if(k == 1 | k == 2) {
        gRatings <- c(gRatings, 9)
      } else {
        gRatings <- c(gRatings, 11 - k)
      }
      
      gCards <- c(gCards, gRatingsCards[[k]][[l]])
    }
  }
  
  pTiers <- data.frame(cbind(gCards, gRatings, "Druid"))
  names(pTiers) <- c("name", "value", "heroClass")
  
  pTiers
  
}

gGid <- c(20, 21, 15, 7, 16, 11, 17, 19, 18) 

gBaseUrl <- "https://docs.google.com/spreadsheet/pub"
gQuery <-"?key=0AifXEOqTcGcLdFVvWk1GRjVJTHJUaTVLcGViR1RRTFE&gid="

gUrl <- paste(gBaseUrl, gQuery, gGid[1], sep = "")

gPageData <- getPageData(gUrl)
gCardTable <- getCardTable(gPageData)
gTiers <- processClassTierPage(gCardTable)
gJsonOutput <- prettify(toJSON(gTiers))


sink("ant1gravityTierList.json")
cat(gJsonOutput)
sink()