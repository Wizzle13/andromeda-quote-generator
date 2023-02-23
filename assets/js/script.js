var numQuotes = 110;
var QuoteID = 0;

// randomly pickes quote
var getQuote = function() {
    var randomQuote =Math.floor(Math.random() * numQuotes)+ 1;
    QuoteID = randomQuote;
}