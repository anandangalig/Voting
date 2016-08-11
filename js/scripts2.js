$(document).ready(function(){
  $("form#ageForm").submit(function(event) {
    event.preventDefault();
    var ageInput = parseInt($("input#age").val());
    if (ageInput >= 18) {
      $("#vote").show();
    } else {
      $("#noVote").show();
    }
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    // debugger;
    var whichReligion = $("#religion").val();
    var whichLife = $("input:radio[name=abortion]:checked").val();
    var whichGun = $("input:radio[name=gun]:checked").val();

    var religionPoints = 0;
      if (whichReligion === "christian" || whichReligion === "muslim") {
        religionPoints = 1;
      } else if (whichReligion === "buddhist") {
        religionPoints = 2;
      } else {
        religionPoints = 3;
      }
      console.log("hi! the value of religionpoints is: " + religionPoints);

    var choicePoints = 0;
      if (whichLife === "life") {
        choicePoints = 3;
      } else {
        choicePoints = 3;
      }

    var gunPoints = 0;
      if (whichGun === "yesGun") {
        gunPoints = 1;
      } else {
        gunPoints = 3;



      if(religionPoints + choicePoints + gunPoints >= 8) {
        alert("Congratulations! You seem to be a liberal!");
      } else {
        alert("Congratulations! You are definitely a conservative!");
      }
    }

  });
});
