var colors = require('colors');
module.exports = function() { 

	//Get a new word constructor/object, used private vars
	this.DisplayWord = function(word){
		var word = word.toUpperCase();
		var display = [];
		var border = "";
		var spacing = "";

		//Loop to used to initially display word using blanks
		for(var i = 0; i<word.length; ++i){
			if(word[i] === " "){
				display.push(" ");
			}
			else{
				display.push("_");
			}
			border+="**";
			spacing+="  ";
		}

		//Changes the blank to a letter based on the positions array of the correct letter 
		this.updateWord = function(letters){

			for(var i=0;i<letters.length;++i){
				display[letters[i]] = word[letters[i]].toUpperCase();
			}
		}

		//End game, display entire word
		this.endGame = function(){
			display = word.split("");

		}

		//Formatted display showing game
		this.printWord = function(wins,losses, guesses, lettersGuessed, error){
			console.log(colors.blue.bold("Hangman NBA Edition"));
			console.log(colors.green.bold("Wins: "+wins));
			console.log(colors.red.bold("Losses: "+losses));
			console.log("Guesses Left: "+guesses);
			console.log(colors.bold(display.join(" ")));
			console.log("Letters Guessed: "+colors.yellow(lettersGuessed.join(" ").toUpperCase()));
			if(error.length>0){
				console.log("Error... "+error);
			}
		}
	}
};