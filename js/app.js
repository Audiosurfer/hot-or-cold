$(document).ready(function(){
    /* Variable Declaration */
    var randNum;
    var guessAmount = 0;
    var guesses;
    
	
    /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    /* Generates random number */
    var hiddenRandNum = function() {
        randNum = Math.ceil(Math.random() * 100);
        return randNum;
    }
    
    /* Add guesses to list of guesses */
    $('.button').click(function() {
        event.preventDefault();
        guesses = $('#userGuess').val();
        guessAmount += 1;
        $('#count').text(guessAmount);
        $('#guessList').append("<li>" + guesses + "</li>");
    })
    
    var newGame = function() {
        $('#guessList li').hide();
        guessAmount = 0;
        $('#count').text(guessAmount);
        hiddenRandNum();
    }
    
    $('.new').click(function() {
        newGame();
    })
    newGame();
    alert(randNum);
});


