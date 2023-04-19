"use strict";

let answerOne = prompt("How you doing?").toLowerCase();

if (answerOne === "yes" || answerOne === "y") {
  alert("I'm doing good.");
} else {
  console.log("Im doing bad.");
}

let answerTwo = prompt("What is going on today?").toLowerCase();

if (answerTwo === "no" || answerTwo === "n") {
  alert("it's sunny.");
} else {
  alert("it's raining.");
}

let answerThree = prompt("howcis your work?").toLowerCase();

if (answerThree === "yes" || answerThree === "y") {
  alert("It is fine.");
} else {
  console.log("It is worse.");

  let answerFour = prompt("Where do I live?").toLowerCase();

  if (answerFour === "no" || answerFour === "n") {
    alert("I live in Nashville.");
  } else {
    alert("I do not live in Memphis.");
  }

  let answerFive = prompt("How old am I?").toLowerCase();

  if (answerFive === "yes" || answerFive === "y") {
    alert("I am 38 years old.");
  } else {
    console.log("I dont know.");
  }