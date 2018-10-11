// Making a word bank
var words = ['APPLE', 'PEAR', 'GRAPEFRUIT',
'WATERMELON', 'LEMON', 'BANANA', 'KIWI',
'STRAWBERRY', 'PEACH', 'PAPAYA', 'PINEAPPLE'];

// Choosing a random word from the word bank
var RandomWord = words[Math.floor(Math.random()*words.length)];
var wordLength = RandomWord.length;


// Letter array
var splitWordArray = RandomWord.split("");

var newWord = [];

// Correct letters on top of corresponding underscore
// Populates empty array with underscores
var answer = document.getElementsByClassName("blanks")[0];

for (var i = 0; i < wordLength; i++){
	answer.innerHTML += `<div class="answer">
      <div class="underscore"></div>
      </div>`
}


// Replaces commas with spaces
newWord.join(' ');


//KEYBOARD
var keyboard = document.getElementsByClassName("keyboard")[0];

for (var i=0; i <= 25; i++){
	keyboard.innerHTML += '<div class="letter">'+ String.fromCharCode(65+i)+'</div>'; 
}

var letter= document.getElementsByClassName("letter")[0];


//UNDERSCORE
var underscore = document.getElementsByClassName("answer");


// WRONGBOX
var wrongbox = document.getElementById("wrongbox");
var usedletters = [];

// HEALTH
var health = document.getElementById("health");
var hearts = 6;
let heartImage = '<img src="img/heart.png">';
let heartArray = [];
for (i = 0; i < hearts; i++) { 
    heartArray.push(heartImage);
}
health.innerHTML = heartArray.join(' ');

// LOSE
var lose = document.getElementById("lose");

// WIN
var win = document.getElementById("win");
var emptySpacesLeft = wordLength;

//KEYBOARD- Disable clicked letters with Event Listener
keyboard.addEventListener('click', function(e){
  var clickedLetter = e.target;
  var chosenLetter = clickedLetter.innerHTML;
  if (clickedLetter.className == 'keyboard' 
  	|| usedletters.includes(chosenLetter) 
  	|| hearts <= 0 
  	|| emptySpacesLeft===0){
    	return;
  }
  usedletters.push(chosenLetter);
  console.log(usedletters);

  
//After clicking, letter is greyed out, unclickable.
  clickedLetter.classList.add('disabled');


var judge = false;
  
for (var i=0; i < wordLength; i++){
  	if (splitWordArray[i].toUpperCase() === chosenLetter){
  		underscore[i].innerHTML = chosenLetter;
  		judge = true;
  		emptySpacesLeft--;
	}//If guess is correct, letter shows up in blanks.
} //If letter is not in word, add it to wrong box. Subtract heart.
	if (judge===false){
		wrongbox.innerHTML += ' ' + chosenLetter;
		hearts--;
		heartArray.pop();
	}
	if (hearts <= 0){
		//GAME OVER!
		lose.classList.remove('hide');
		for (i = 0; i < RandomWord.length; i++){
			underscore[i].innerHTML = RandomWord[i];
		}
	}
	if (emptySpacesLeft===0){
		//YOU WIN!
		win.classList.remove('hide');
	}
	// draw the hearts
	document.getElementById('health').innerHTML = heartArray.join(' '); 
});






