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
});
