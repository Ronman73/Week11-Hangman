//npm modules
var gameJS = require('./game.js')();
var wordJS = require('./word.js')();
var letterJS = require('./letter.js')();
var terminalJS = require('./terminal.js')();



//Number of guesses
var GUESSES = 7;

//Initialize objects
var terminal = new Terminal();
var newWord = new GetNewWord();
var word = newWord.getWord(); //word must be chosen to initialize other objects
var display = new DisplayWord(word);
var validateWord = new ValidateWord(word);

//Variables
var wins = 0;
var losses = 0;
var guessesLeft = GUESSES;
var displayError=false;
var lettersGuessed =[];

//Reset game, get a new word
function resetGame(){

	guessesLeft = GUESSES;
	lettersGuessed =[];
	word = newWord.getWord();
	display = new DisplayWord(word);
	validateWord = new ValidateWord(word);
	run();
}

//End game display
function finalDisplay(){

	terminal.reset();
	display.endGame();
	display.printWord(wins,losses, guessesLeft, lettersGuessed, false);
}

//Prompt to play again
function playAgain(extraText){

	terminal.ask(extraText+"Want to Play Again? (Y/N)").then(function(result){
		if(result.toLowerCase() === 'y'){
			resetGame();
		}
		else if(!(result.toLowerCase() === 'n')){
			playAgain("I'm Sorry, ");
		}
	});
}

//Run game
function run(){
	terminal.reset();
	display.printWord(wins,losses, guessesLeft, lettersGuessed, displayError);
	displayError = "";
	terminal.ask("Enter Your Guess: ").then(function(result){

		//Check to see if is a letter or number
		if(result.length<2 && result.match(/[A-Za-z0-9]+/)){
			if(!validateWord.alreadyGuessed(lettersGuessed, result) ){

				lettersGuessed.push(result);  //Adds to letters guessed

				var letterResults = validateWord.checkLetter(result); //validate letter

				if(letterResults.length>0){

					display.updateWord(letterResults); //update display
				}
				else{
					guessesLeft-=1;
				}
			}
			else{
				displayError = "Letter already guessed!";
			}
		}
		else{
			displayError = "Guess only 1 letter!";
		}

		if(guessesLeft>0){
			//if guesses remain and hasn't won recursively call run()
			if(!validateWord.hasWon()){
				run();
			}
			//Win
			else{
				wins+=1;
				finalDisplay();
				console.log("You Win!");
				playAgain("");
			}
		}
		//Lose
		else{
			losses+=1;
			finalDisplay();
			console.log("You Lose!");
			playAgain("");
		}
	});
}


//Start Game
run();




