$(document).ready(function () {

  $("form").on("submit", function(event) {
    event.preventDefault();
    var value = Math.floor((Math.random()*6 + 1));
    console.log(value)
    $.post('/rolls', value, function(response) {
      console.log(response)
      $("#die").html(response);
    });


  });
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
