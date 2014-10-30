
gBaseUrl <- "https://docs.google.com/spreadsheet/pub"
gQuery <-"?key=0AifXEOqTcGcLdFVvWk1GRjVJTHJUaTVLcGViR1RRTFE&gid=20"

getPageData <- function(pBaseUrl, pQuery) {
  
  library("httr")
  library("XML")
  
  # Define certicificate file
  cafile <- system.file("CurlSSL", "cacert.pem", package = "RCurl")
  
  # Read page
  GET(
    paste(pBaseUrl, pQuery, sep = ""), 
    config(cainfo = cafile)
  )
  
}

getCardTable <- function(pPageData) {
  
  tables <- readHTMLTable(content(pPageData, as = 'text'))
  
  tables[[2]]
  
}

gPageData <- getPageData(gBaseUrl, gQuery)
gCardTable <- getCardTable(gPageData)
