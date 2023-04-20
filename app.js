"use strict";

let answerOne = prompt("Are you doing good?").toLowerCase();

if (answerOne === "yes" || answerOne === "y") {
  alert("I'm doing good.");
  //console.log("I'm doing fine.")
} else {
  alert("I'm ok.")
  //console.log("Im doing bad.");
}

let answerTwo = prompt("Is it snowing today?").toLowerCase();

if (answerTwo === "no" || answerTwo === "n") {
  alert("it's sunny.");
  //console.log("No, it is not snowing today.");
} else {
  alert("it's raining.");
  //console,log('it is hot today.');

}

let answerThree = prompt("do I go to work?").toLowerCase();

if (answerThree === "yes" || answerThree === "y") {
  alert("It is fine.");
  //console.log("yes, I go to work.");
} else {
  alert("It is worse.");
  // console.log("It is worse.");
it}
  let answerFour = prompt("Do I live in Memphis?").toLowerCase();

  if (answerFour === "no" || answerFour === "n") {
    alert("I live in Nashville.");
    //console.log("No, I do not live in Memphis.");
  } else {
    alert("I do not live in Knoxville.");
    console.log("I dont live there.");
  }

  let answerFive = prompt("Am I 38 years old?").toLowerCase();

  if (answerFive === "yes" || answerFive === "y") {
    alert("yes,I am 38 years old.");
    //console.log("yes,I am 38 years old.")
  } else {
    alert ("That's wrong, I am 38 years old.")
   // console.log("I dont know.");
  }

  alert(
    `Now that you know me, ${name}! Let's play a random guessing game before you read my page for detailed information about me.`
  );
  
  // Question 6
  let answer6 = [5, 10, 15, 20];
  let attempts6 = 6;
  let userAnswer6 = parseInt(prompt("Guess a number between 1 and 25 that's divisible by 5:"));
  
  while (attempts6 > 0) {
    console.log("User's guess: " + answer6);
    let isCorrect = false;
    for (let i = 0; i < answer6.length; i++) {
      if (userAnswer6 === answer6[i]) {
      alert("Correct! The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
      correctAnswers++;
      isCorrect = true;
      break;
      }
    }
    if (isCorrect) {
      break;
    } else {
      attempts6--;
      if (userAnswer6 > 20) {
        alert("Too high!");
      } else if (userAnswer6 < 5) {
        alert("Too low!");
      } else if (userAnswer6 % 5 !== 0) {
        alert("That's not divisible by 5!");
      } else {
        alert("Sorry, wrong answer.");
      }
      if (attempts6 > 0) {
        userAnswer6 = parseInt(prompt("try again!"));
      }
    }
  }
  
  if (attempts6 === 0) {
    console.log("User is out of attempts.");
    alert("Sorry, out of attempts. The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
  } else {
      console.log("User is correct!.");
  }
  
  // Question 7
  let answer7;
  let answerCount = 6;
  let answered = false;
  
  while (answerCount > 0) {
    answer7 = prompt("Name a favorite city:");
    for (var i = 0; i < possibleAnswers.length; i++) {
      if (answer7.toLowerCase() === possibleAnswers[i].toLowerCase()) {
        alert("Correct!");
        correctAnswers++;
        answered = true;
        break;
      }
    }
    if (answered) {
      break;
    }
    alert("Incorrect. Guesses left: " + (answerCount - 1));
    answerCount--;
  }
  if (answerCount == 0) {
    alert("Out of guesses. Possible answers were: " + possibleAnswers.join(", "));
  }
  
  {
    console.log("Question 7 - Name a favorite city:");
    console.log("Possible correct answers: " + possibleAnswers.join(", "));
    console.log("User's answer: " + answer7);
    console.log("User got it correct? " + answer7);
  }
  
  // Display total correct answers
  alert("You got " + correctAnswers + " out of 7 correct.");