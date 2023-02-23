var genBtn = document.getElementById('genButton');
var quoteSection = document.querySelector("#quote");
var numQuotes = 2; //110
var QuoteID = 0;

// randomly pickes quote
var getQuote = function() {
    var randomQuote =Math.floor(Math.random() * numQuotes)+ 1;
    QuoteID = randomQuote;
};

var genQuote = function(){
    getQuote();
    console.log(QuoteID);
    
    quoteSection.append('<br>' + QuoteID + '<br>')
}



genBtn.addEventListener("click", function(){
    genQuote();
})