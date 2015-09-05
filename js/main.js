$(function(){

  // Separating the routine that determines what to print
  var fizzbuzz = function(i) {
    if (i % 3 == 0 && i % 5 == 0) {
      return "FizzBuzz";
    }
    else if (i % 3 == 0) {
      return "Fizz";
    }
    else if (i % 5 == 0) {
      return "Buzz";
    }
    else {
      return i;
    }
  };

  var runFizzbuzz = function(num) {
    $('#fizzbuzzoutput').empty();

    for (var i = 1; i <= num; i++) {
      $('#fizzbuzzoutput').append(fizzbuzz(i));
      if (i != num) {
        $('#fizzbuzzoutput').append(",  ");
      }
    }
  };

  $("#fizzbuzzinput").on ('input', function() {
    var newval = $('#fizzbuzzinput').val();

    // Don't allows values > 10000
    if (newval > 10000) {
      newval = newval.substring(0,4);
    }
    $("#fizzbuzzinput").val(newval);

    // Run the FizzBuzz routine
    runFizzbuzz(newval);
  });
});
