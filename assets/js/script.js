var genBtn = document.getElementById('genButton');
var quoteSection = document.querySelector("#quote");
var numQuotes = 2; //110
var QuoteID = 0;
var modalQuote = document.getElementById("quote");
// randomly pickes quote
var getQuote = function() {
    var randomQuote =Math.floor(Math.random() * numQuotes);
    QuoteID = randomQuote;
};

var genQuote = function(){
    getQuote();
    modalQuote.style.display = "block";
    const apiUrl = "./assets/api/quotes.json" ;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            console.log(data); // do something with the data here
            const Rquote = data.quotes[QuoteID];

            // extract the quote and name properties
            const { Rquote: quoteText, name, source,year, quote } = Rquote;
             

            // document.querySelector('intro').style.visibility='hidden';
            $(".intro").hide();
            $(quoteSection).empty();
            $(quoteSection).append(
                "<div><br>" + `"${quote}"` + "<br>" + `${name}` + "<br>" + `${source}` + "<br>" +`${year}` + "<br></div>"
                );
        })
        .catch(error => {
        console.error('Error fetching JSON data:', error);
        
    });
}



genBtn.addEventListener("click", function(){
    genQuote();
})