module.exports = function() { 

	//Get a new word constructor/object
	this.ValidateWord = function(word){
		
		var word = word.toLowerCase();
		var correctLetters =0; //counts correct letters, used in hasWon function

		word.split("").forEach(function(value,index){
			if(value === " "){
				correctLetters+=1;
			}
		});

		//Checks letter to see if letter exists, Update guess list, returns array of letter positions
		this.checkLetter = function(letter){
			var letterArr = [];
			letter = letter.toLowerCase();
			for(var i=0;i<word.length;++i){
				if(word.charAt(i) === letter){
					letterArr.push(i);
					correctLetters+=1;
				}
			}
			return letterArr;
		}

		//Checks to see if letter has been guessed
		this.alreadyGuessed = function(letterArr, letter){
			if(letterArr.indexOf(letter)>-1){
				return true;
			}
			else{
				return false;
			}
		}

		//Checks to see if player has won
		this.hasWon = function(){
			if(correctLetters === word.length){
				return true;
			}
			else{
				return false;
			}
		}

	}
};