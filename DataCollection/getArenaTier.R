getPageData <- function() {
  url <- "https://docs.google.com/spreadsheet/pub"
  query <-"?key=0AifXEOqTcGcLdFVvWk1GRjVJTHJUaTVLcGViR1RRTFE&gid=20"
  
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
  
  tables[[2]]
  
}

if (!exists("gCardTable") & exists("gPageData")) {
  gCardTable <- getCardTable(gPageData)
}
