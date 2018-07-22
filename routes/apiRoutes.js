// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    tableData.push(req.body);

    var userScores = tableData[tableData.length-1].scores


    var userScoreArray = [];

    var absArray = [];

    for (n=0; n<10; n++){
      userScoreArray.push(userScores[n])
    }


    for (i=0; i<tableData.length; i++){
      var tempArray = [];
      for (p=0; p<10; p++){
        tempArray.push(tableData[i].scores[p])
      }

      var sumArray = [];
      for (k=0; k<10; k++){
        absnum = Math.abs(parseInt(tempArray[k])-parseInt(userScoreArray[k]))
        sumArray.push(absnum)
      }

      
      var totsum = sumArray.reduce((a, b) => a + b, 0)
      absArray.push(totsum)

      var sumArray = [];

    }


    var minposition = 0;

    var value = absArray[0]

    for (q=0; q<absArray.length; q++){
      if ( absArray[q]<value){
        value = absArray[q];
        minposition = q;
      }
    }

    var chosen = tableData[minposition];


    res.json(chosen);


 
  });


};
