

$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var currentSurvey = {
        selection1: $("#sel1").val().trim(),
        selection2: $("#sel2").val().trim(),
        selection3: $("#sel3").val().trim(),
        selection4: $("#sel4").val().trim(),
        selection5: $("#sel5").val().trim(),
        selection6: $("#sel6").val().trim(),
        selection7: $("#sel7").val().trim(),
        selection8: $("#sel8").val().trim(),
        selection9: $("#sel9").val().trim(),
        selection10: $("#sel10").val().trim()

    };

    console.log(currentSurvey);

    $.post("/api/friends", currentSurvey,function(data){

    })

});