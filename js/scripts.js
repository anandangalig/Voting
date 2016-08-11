$(document).ready(function(){
  $("form#age").submit(function(event) {
  event.preventDefault();
  var ageInput = parseInt($("#age").val());
  if (ageInput >= 18) {
    $('#vote').show();
  } else {
    $('#noVote').show();
  }
  });
});
