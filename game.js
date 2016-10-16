//Export Random Word
module.exports = function() { 

	//Get a new word constructor/object
	this.GetNewWord = function(){
		//Private word list
		var WORDLIST =['Dallas Mavericks','Dirk Nowitzki', 'San Antonio Spurs', 'Tim Duncan', 'Golden State Warriors',
		'Stephen Curry', 'Kevin Durant','Klay Thompson', 'Oklahoma City Thunders','Russell Westbrook','Cleveland Caveliers','Lebron James'];
		//Return random word
		this.getWord = function(){
			return WORDLIST[Math.floor(Math.random()*WORDLIST.length+1)-1]; 
		}

	}
};