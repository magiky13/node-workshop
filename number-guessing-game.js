var prompt = require('prompt');
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
var counter = 3;

function guessNumber(number) {
    
    prompt.get('What number will you let me play with today muahahah', function(err, answers) {

        if (err) {
            console.log('there was an error');
        }
        else {
            
            if (Number(answers.enterGuess) === randomNumber) {
                console.log("thats fvcked, how did u do tha");
            }
            else if (Number(answers.enterGuess) > randomNumber) {
                console.log("number is lower than your guess");
            }
            else {
                console.log("number is higher than your guess");
            }
            if (counter > 0) {
                counter--;
                guessNumber();
            }
            else {
                console.log("oops guesses over");
            }
        }
    });

}
guessNumber();