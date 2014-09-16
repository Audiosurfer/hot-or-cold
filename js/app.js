$(document).ready(function(){
    /* Variable Declaration */
    var randNum;
    var guessAmount = 0;
    var guesses;
    var difference;
	
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
    
    /* Finds difference between guessed number and random number */
    var guessDiff = function() {
        difference = Math.abs(guesses - randNum);
        return difference;
    }
    
    /* Add guesses to list of guesses */
    $('.button').click(function() {
        event.preventDefault();
        guessAdd();
        guessCountAdd();
        guessProx();
    })
    
    /* Grabs value of guess from input field */
    var guessGet = function() {
        guesses = $('#userGuess').val();
    }
    
    /* Increase guss count */
    var guessCountAdd = function() {
        guessAmount += 1;
        $('#count').text(guessAmount);
    }
    
    /* List guessed numbers */
    var guessAdd = function() {
        guessGet();
        $('#guessList').append("<li>" + guesses + "</li>");
    }
    
    /* Start a new game */
    var newGame = function() {
        $('#guessList li').hide();
        guessAmount = 0;
        $('#count').text(guessAmount);
        $('#feedback').text("Make your Guess!");
        hiddenRandNum();
    }
    
    /* Sees how close guessed value is to actual value */
   var guessProx = function() {
        guessGet();
        guessDiff();
        if (difference === 0) {
            $('#feedback').text("Correct! " + guesses + " is the answer");
        }
        else if (difference <= 5) {
             $('#feedback').text("You're burning up");
        }
        else if (difference <= 10) {
             $('#feedback').text("You're red hot");
        }
        else if (difference <= 20) {
             $('#feedback').text("You're hot");
        }
        else if (difference <= 30) {
             $('#feedback').text("You're warm");
        }
        else if (difference <= 50) {
             $('#feedback').text("You're cold");
        }
        else {
            $('#feedback').text("You're ice cold");
        }
    } 
     
    $('.new').click(function() {
        newGame();
    })
    newGame();
});


