getPageData <- function() {
  
  url <- "https://docs.google.com/spreadsheets/d/"
  query <-"10YJ7KfR0KlR057zat2lV9wvRLWLD0eTcdU7NtR4xiKs/pubhtml"
  
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

M <- as.matrix(gCardTables[[10]])
