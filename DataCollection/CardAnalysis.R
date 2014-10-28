list.of.packages <- c("jsonlite")
new.packages <- list.of.packages[!(list.of.packages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages)

x <- fromJSON("http://hearthstonejson.com/json/AllSets.json")

class(x)

y <- x[[1]]

class(y)

levels(factor(y[,'type']))