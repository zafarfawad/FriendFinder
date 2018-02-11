// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    var friends = require("../data/friends");

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {

        res.json(friends);

    });


    app.post("/api/friends", function (req, res) {
        //do calculations here
        var scoreTotal = 0;
        var scoreTally = 0;
        var scoreTallyArray = [];
        var currentUserScore = [];
        var matchingUser = []
        var requestBody = req.body;

        //pushing keys from the object repsonse into an array
        for (var key in requestBody) {
            if (requestBody.hasOwnProperty(key)) {
                currentUserScore.push(requestBody[key]);
            }
        };
        //total of the current user
        for (var property in requestBody) {
            scoreTotal += parseInt(requestBody[property]);
        };
        // console.log('testing', friends[0].scoresArray);

        for (i = 0; i < friends.length; i++) {
            scoreTally = 0;
            for (j = 0; j < currentUserScore.length; j++) {
                // console.log(scoreTallyArray);
                scoreTally += Math.abs(friends[i].scoresArray[j] - currentUserScore[j]);

            }
            scoreTallyArray.push(scoreTally);
        }

        var minimumValue = [Math.min.apply(null, scoreTallyArray)];
        var matchingUserValue = [(scoreTallyArray.indexOf(minimumValue[0]))];
        matchingUser.push(friends[matchingUserValue[0]]);
        res.json(matchingUser[0]);

        // console.log(matchingUser);
        // console.log(scoreTally);
        // console.log(scoreTallyArray);
        // console.log(currentUserScore);

    });



    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friends = [];

        console.log(friends);
    });
};