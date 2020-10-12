require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {

 const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
      

// Access the "default" token model
   var tokens = mvc.Components.get("default");

// Change the value of a token $mytoken$
// tokens.set("mytoken", "this is the new value");

//  Set token $end_date$ to current date (ie POV done)
//  tokens.set("end_date", new Date());   
        
// Retrieve the value of a token $end_date$
var tokenValue = tokens.get('end_date');


// manually set token value
// var tokens = mvc.Components.get("submitted");
//   tokens.set("tokenValue","tokens");
    
// Listen for a change to the token value and set new value
tokens.on("change:end_date", function(newEndDate, end_date) {
 //   tokens.set(mvc.Components.get("submitted"));
   var tokens = mvc.Components.get('submitted');
   var tokenValue = tokens.get('end_date');
});

/*
  // When the $indexName$ token changes, form the search query
        var defaultTokenModel = mvc.Components.get("default");
        defaultTokenModel.on("change:indexName", function(newIndexName, indexName, options) {
            var newQuery = " | stats count by sourcetype, index";
            if (indexName == "all") {
                newQuery = "index=_internal OR index=_audit OR index=main" + newQuery;
            } else {
                newQuery = "index=" + indexName + newQuery;
            }
            // Update the $searchQuery$ token value
            defaultTokenModel.set("searchQuery", newQuery);
        });
        
*/        
        

 // let end_date = "Oct 30, 2020 00:00:00",
     let countDown = new Date(tokenValue).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "POV is out of time!";
          countdown.style.display = "none";
          
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0) 
  });