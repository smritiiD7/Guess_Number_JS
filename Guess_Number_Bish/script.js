/* 'use strict';

console.log(document.querySelector('.message')); // will just show the element of class message
console.log(document.querySelector('.message').textContent); //reading the content of the element

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

console.log((document.querySelector('.guess').value = 69));
console.log(document.querySelector('.guess').value);
 */

/* document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1; // mah is an object and random is a method
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore=0;
//EVENT LISTENER

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { //no input
    document.querySelector('.message').textContent =
      'No number was entered!!🙂';

  } else if (guess == secretNumber) { //guessed correctly
    document.querySelector('.message').textContent =
      'Okay a number was entered,Yyya CORRECT NUMBER!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor="#60b347";
      document.querySelector('.number').style.width = "30rem"
      if(score>highScore)
      {
        highScore = score;
        document.querySelector('.highscore').textContent=highScore;
      }
      
  }
  else if(guess!==secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent =
       guess> secretNumber ? "Far from the number bro! Too high!!" : "Close from the number bro! Too close!!"
      score = score - 1;
    }
     else {
      document.querySelector('.message').textContent =
        'You lost the game, get the f out!!';
      score = 0;
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.score').textContent = score;

  }
  
  
  
  
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Far from the number bro! Too high!!';
      score = score - 1;
    }
     else {
      document.querySelector('.message').textContent =
        'You lost the game, get the f out!!';
      score = 0;
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.score').textContent = score;
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Close from the number bro! Too close!!';
      score = score - 1;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, get the f out!!';
      score = 0;
      document.querySelector('.score').textContent = 0;
    }

    document.querySelector('.score').textContent = score;
  } */
});


document.querySelector('.again').addEventListener('click',function(){

secretNumber = Math.trunc(Math.random() * 20) + 1;
score=20;
document.querySelector('.message').textContent="Start guessing again...";
document.querySelector('.number').textContent="?";
document.querySelector('body').style.backgroundColor="black";
document.querySelector('.guess').value='';
document.querySelector('.number').style.width = "15rem"
document.querySelector('.score').textContent=score;
});


