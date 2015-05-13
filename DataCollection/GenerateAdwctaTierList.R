getPageData <- function() {
  
  url <- "https://docs.google.com/spreadsheets/d/"
  query <-"16Djk1vJCsvDAuihHiwNG_5qzYH_XAA5XsPUYHlA9DEQ/htmlembed?gid=8&widget=false"
  
  library("httr")
  library("XML")
  
  # Define certicificate file
  cafile <- system.file("CurlSSL", "cacert.pem", package = "RCurl")
  
  # Read page
  GET(
    paste(url, query, sep = ""), 
    config(cainfo = cafile)
  )
  
}

if (!exists("gPageData")) {
  gPageData <- getPageData()
}

getCardTable <- function(pPageData) {
  
  tables <- readHTMLTable(content(pPageData, as = 'text'))
  
  tables
  
}

if (!exists("gCardTable") & exists("gPageData")) {
  gCardTables <- getCardTable(gPageData)
}

cleanText <- function(pCardText) {
  vTextOut <- pCardText
  if(grepl("Sen.+jin Shieldmasta",pCardText)) {
    vTextOut <- "Sen'jin Shieldmasta"
  }
  vTextOut
}

M <- as.matrix(gCardTables[[1]])

gRatings <- c(
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

for (i in seq(3, 19, by=2)) {
  # loop through and pull each (card, rating)
  # for each of the classes
  print(paste(M[10,i],M[10,i+1]))
}
