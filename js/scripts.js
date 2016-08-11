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
    var whichReligion = parseInt($("#religion").val());
    var whichLife = parseInt($("input:radio[name=abortion]:checked").val());
    console.log(whichLife);
  });
});
