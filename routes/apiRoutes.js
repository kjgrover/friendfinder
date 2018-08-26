var tableData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {

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
