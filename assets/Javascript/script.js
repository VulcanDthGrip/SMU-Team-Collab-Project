// Global Variable
const api_key ="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";
const yahooSearchAPI ="https://serpapi.com/search.json?engine=yahoo&p=?maxResults=5&api_key=";
let searchYahooDisplay = document.getElementById('search-input');

$('#find-btn').on("click", function (event) { 
  event.preventDefault();
  searchInputs = $("#search-input").val();
  // Need to add to localStorage
  console.log("Searching...");
  

});


//  var getYahooSearch = function () {
//    let searchYahoo = yahooSearchAPI + api_key;
//    fetch(searchYahoo)
//    console.log("searching");
//        then(function (response) {
//            return response.json();
//        })
//       };

// Add function to click on gas station results to get map and directions
