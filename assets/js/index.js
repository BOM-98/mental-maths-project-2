import { digitParameters, gameLevelSettings, timer , answerObject } from "./data-structures.js";
import { calculateCorrectAnswer, gameDecider, numeratorGenerator, incrementQuestion, displayAdditionQuestion, displayDivisionQuestion, displayMultiplyQuestion, displaySubtractQuestion, updatePercentage, generateNum1, generateNum2, adjustLevel } from "./math-functions.js";

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

export let answerArray = [];
export let answerInstance;
let container;
let calculatorAdded = false; 
let gameLevel = parseInt(document.getElementById("level").innerText);

document.addEventListener("DOMContentLoaded", function () {

    modal.style.display = "block";

  });

function beginGame() {
    modal.style.display = "none";
    document
      .getElementById("answer")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });

      document.getElementById("submit").addEventListener("click", function () {
        checkAnswer();
      });

      timer.start();
  
      //Run the game with the input from the gameDecider function determining whether the sum will be addition, subtraction, multiplication or division
    runGame(gameDecider());
}
  
  
  /**
   * With the specified gameType, a new round of the game is initiated by the 'runGame' function. 
   * It initially deletes the preceding response and centers attention on the answer area. 
   * The game's kind of arithmetic operation (addition, subtraction, multiplying, or dividing) is specified by the string parameter gameType. 
   * to display the question based on the gameType.
   *
   * @param {string} gameType - The type of arithmetic operation for the game (addition, subtract, multiply, division).
   * @throws {string} If the specified gameType is not recognized, an error will be thrown.
   */
  function runGame(gameType){
  
      // Clear the answer field and set focus on it
      document.getElementById('answer').value = "";
      document.getElementById('answer').focus();
  
      // Creates two random numbers between 1 and 25
      let num1 = generateNum1(gameType, gameLevel);
      let num2 = generateNum2(gameType, gameLevel);
  
      // Depending on the gameType, display the appropriate question
      if(gameType === "addition"){
          displayAdditionQuestion(num1, num2);
      } else if (gameType === "subtract"){
          displaySubtractQuestion(num1, num2);
      } else if (gameType === "multiply"){
          displayMultiplyQuestion(num1, num2);
      } else if (gameType === "division"){
        if (num1 < num2){
	        let placeholder = num2;
	        num2 = num1;
	        num1 = placeholder;
	    }
        if (num1 % num2 !== 0){
            num1 = numeratorGenerator(num2);
        }
          displayDivisionQuestion(num1, num2);
      } else {
          // If the gameType is not recognized, display an error message and throw an error
          alert(`Unknown game type: ${gameType}`);
          throw `Unknown game type: ${gameType}. Aborting!`;
      }
  }
  
  /**
   * The `checkAnswer` function validates the user's answer against the correct answer.
   * It first gets the user's answer from the input field and parses it as an integer.
   * Then, it calculates the correct answer and checks if the user's answer is equal to the correct answer.
   * Depending on whether the answer is correct, it shows an appropriate alert message.
   * Finally, it starts a new round of the game with a randomly decided game type.
   */
  export function checkAnswer(){
  
      // Get the user's answer from input field and parse it as an integer
      let userAnswer = parseInt(document.getElementById('answer').value);

      //check if the user has entered a number
        if (isNaN(userAnswer)) {
            alert("Please enter a number");
            return;
        };
  
      // Calculate the correct answer
      let calculatedAnswer = calculateCorrectAnswer();
  
      // Check if the user's answer is equal to the correct answer
      let isCorrect = userAnswer === calculatedAnswer;

      answerInstance = answerObject(userAnswer, calculatedAnswer, parseInt(document.getElementById('question').innerText), isCorrect, timer.time, parseInt(document.getElementById('level').innerText));
        answerArray.push(answerInstance);
  
      // If the answer is correct, display a congratulatory message
      // Otherwise, display a message showing the correct answer
      if(isCorrect){
          alert("Correct Answer - Well Done!");
          incrementQuestion();
          updatePercentage();
      } else {
          alert(`${userAnswer} is incorrect. The correct answer was ${calculatedAnswer}!`);
          incrementQuestion();
          updatePercentage();
      };

      adjustLevel();
  
      // Start a new round of the game with a randomly decided game type
      runGame(gameDecider());
      timer.reset();
  }

    /*The Modal*/

    // Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let startButton = document.getElementById("start");

startButton.onclick = function() {
    beginGame();
    manageCalculator();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  beginGame();
  manageCalculator();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    beginGame();
    manageCalculator();
  }
}

const questionTextManager = function() {
  if (window.innerWidth < 400) {
    this.document.getElementById("question-stat").innerHTML = "Q";
  } else {
    this.document.getElementById("question-stat").innerHTML = "Question";
  }
};

  const manageCalculator = function() {
    // Get the calculator div
    const calculatorDiv = document.getElementById('calculator');
  
    // Check if screen size is less than 400px
    if (window.innerWidth < 400) {
      // Check if calculator is not added yet
      if (!calculatorAdded) {
        // create main calculator container
        const container = document.createElement('div');
        container.className = 'container';
        container.id = 'calculator-container';
  
        // create and append display input
        const display = document.getElementById('answer');
  
        // create and append buttons container
        const buttons = document.createElement('div');
        buttons.className = 'buttons';
        container.appendChild(buttons);
  
        // define button values
        const buttonValues = ['AC', 'DEL', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  
        // define function to calculate based on button clicked
        let output = "";
        const calculate = (btnValue) => {
          display.focus();
          if (btnValue === 'AC') {
              output = '';
          } else if (btnValue === 'DEL') {
              output = output.slice(0, -1);
          } else {
              output += btnValue;
          }
          display.value = output;
        };
  
        // create, configure and append buttons
        buttonValues.forEach(value => {
          const button = document.createElement('button');
          button.className = 'calc-button';
          button.dataset.value = value;
          button.innerText = value;
          button.addEventListener('click', () => calculate(value));
          buttons.appendChild(button);
        });
  
        // append the calculator to the calculator div
        calculatorDiv.appendChild(container);
  
        // set calculatorAdded to true
        calculatorAdded = true;
      }
    } else {
      // if calculator exists, remove it
      let container = document.getElementById('calculator-container');
      if (container) {
        calculatorDiv.removeChild(container);
      }
      // set calculatorAdded to false
      calculatorAdded = false;
    }
  };
  
  window.addEventListener("resize", manageCalculator);
  window.addEventListener("resize", questionTextManager);
  




