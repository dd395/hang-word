
//create an array of words from 12 Days of Christmas
var words = ["drummers", "pipers", "lords", "ladies","maids", "swans", "geese", "rings","birds","hens","doves", "partridge"];

//pick a random word from the words of array
var word = words[Math.floor(Math.random()*words.length)];

//sets up the answer array to show how many letters there are using "-"
var answerArray = [];
for(var i=0; i<word.length;i++){
    answerArray[i]="-";
}

//create a variable to hold the number of remaining letter to be quessed
var remainingLetters = word.length;

var incorrectGuesses = 6;

//main game loop

//while there are letters left to be guessed
while(remainingLetters && incorrectGuesses>0) {
    //show the player their progress
    alert(answerArray.join(""));
    //get a guess from the player
    var guess = prompt("Guess a letter or click cancel to stop playing.");
    //if the guess is blank
    if (guess == null) {
        //exit the game loop
        break;
        //if the guess is more than one letter or no letter
    } else if (guess.length !== 1) {
        //alert them to guess a single letter only
        alert("Please enter a single letter.");
        //valid guess
    } else {
        //update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            //if the letter is in the word at that point or index
            if (word[j] === guess) {
                //update the answer array with the letter they guessed at that point or index
                answerArray[j] = guess;
                //subtract one from remaining letters
                remainingLetters--;
           }
        }
    }

            //end of game loop
        }
//letter player know the word
        alert(answerArray.join(" "));

//Congrats the player
        alert(" Good job! The answer was " + word);







