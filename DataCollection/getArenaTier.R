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
  
  url <- "https://docs.google.com/spreadsheet/pub"
  query <-"?key=0AifXEOqTcGcLdFVvWk1GRjVJTHJUaTVLcGViR1RRTFE&gid=20"
  
  library("httr")
  library("XML")
  
  # Define certicificate file
  cafile <- system.file("CurlSSL", "cacert.pem", package = "RCurl")
  
  # Read page
  page <- GET(
    paste(url, query, sep = ""), 
    config(cainfo = cafile)
  )
  
  tables <- readHTMLTable(content(page, as = 'text'))
  
  tables[[2]]
  
}

if (!exists("gCardTable")) {
  gCardTable <- getCardTable()
}

M <- as.matrix(gCardTable)
gTopCard <- FALSE
gNumTopCards <- 0

for(i in 1:ncol(M)){
  for(j in 1:nrow(M)){
    if(gTopCard == TRUE & M[j,i] != "") {
      gNumTopCards = gNumTopCards + 1
    }
    if(M[j,i] == "Top") {
      gTopCard <- TRUE
      print("Start: Top")
    }
    if(M[j,i] == "" & gTopCard == TRUE) {
      gTopCard <- FALSE
      print("End: Top")
    } 
  }
}
print(paste(gNumTopCards, "'top' cards"))