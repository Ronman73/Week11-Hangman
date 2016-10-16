//Terminal Functions
var readline = require('readline');
//var Promise = require('es6-promise').Promise;  //add package if not using ES6 nodejs

module.exports = function() {

	this.Terminal= function(){

		//Clears the screen
		this.reset = function() {
		    return new Promise(function(resolve, reject) {
		        resolve(process.stdout.write('\033c'));
		    });
		}

		//Ask a question and store the input
		this.ask = function(message) {

		    return new Promise(function(resolve, reject) {	
			    var line="";	
				var rl = readline.createInterface(process.stdin, process.stdout);
				rl.setPrompt(message);
				rl.prompt();
				rl.on('line', function(line) {
			     	returnLine = line;
			     	rl.close();
			     	resolve(line);
				});
			}); 
		}
	}
}