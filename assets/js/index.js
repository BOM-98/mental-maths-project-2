import { answerObject } from "./data-structures.js";
import {
  calculateCorrectAnswer,
  gameDecider,
  numeratorGenerator,
  incrementQuestion,
  displayAdditionQuestion,
  displayDivisionQuestion,
  displayMultiplyQuestion,
  displaySubtractQuestion,
  updatePercentage,
  generateNum1,
  generateNum2,
  adjustLevel,
} from "./math-functions.js";

//answer array is used to store objects with the data on each answer (isCorrect, userAnswer, correctAnswer, question, time, level)
let answerArray = [];

//answer instance is the object that is created for each answer and pushed to the answer array
let answerInstance;

//calculatorAdded is used to ensure that the calculator is only added once and not multiple times if the screen size is changed
let calculatorAdded = false;

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the button that starts the game (inside the modal)
let startButton = document.getElementById("start");

//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  modal.style.display = "block";
});

/**
 * Begin the game, setting up event listeners and initializing game variables.
 *
 *  The function hides the modal dialog.
 *  Sets up 'keydown' event listener on the answer input field to allow checking the answer when the Enter key is pressed.
 *  Sets up 'click' event listener on the submit button to allow checking the answer when the button is clicked.
 *  Starts the game timer.
 *  Calls the runGame function with the result of the gameDecider function to start the game with a selected operation (addition, subtraction, multiplication, or division).
 */
function beginGame() {
  modal.style.display = "none";
  //Get the button elements and add event listeners to them
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

  //begin the timer
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
function runGame(gameType) {
  // Clear the answer field and set focus on it
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();

  let gameLevel = parseInt(document.getElementById("level").innerText);

  // Creates two random numbers between 1 and 25
  let num1 = generateNum1(gameType, gameLevel);
  let num2 = generateNum2(gameType, gameLevel);

  // Depending on the gameType, display the appropriate question
  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "division") {
    if (num1 < num2) {
      let placeholder = num2;
      num2 = num1;
      num1 = placeholder;
    }
    if (num1 % num2 !== 0) {
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
function checkAnswer() {
  // Get the user's answer from input field and parse it as an integer
  let userAnswer = parseInt(document.getElementById("answer").value);

  //check if the user has entered a number
  if (isNaN(userAnswer)) {
    alert("Please enter a number");
    return;
  }

  // Calculate the correct answer
  let calculatedAnswer = calculateCorrectAnswer();

  // Check if the user's answer is equal to the correct answer
  let isCorrect = userAnswer === calculatedAnswer;

  answerInstance = answerObject(
    userAnswer,
    calculatedAnswer,
    parseInt(document.getElementById("question").innerText),
    isCorrect,
    timer.time,
    parseInt(document.getElementById("level").innerText)
  );
  answerArray.push(answerInstance);

  // If the answer is correct, display a congratulatory message
  // Otherwise, display a message showing the correct answer
  if (isCorrect) {
    alert("Correct Answer - Well Done!");
    incrementQuestion();
    updatePercentage(answerArray);
  } else {
    alert(
      `${userAnswer} is incorrect. The correct answer was ${calculatedAnswer}!`
    );
    incrementQuestion();
    updatePercentage(answerArray);
  }

  adjustLevel(answerArray);

  // Start a new round of the game with a randomly decided game type
  runGame(gameDecider());
  timer.reset();
}

/*The Modal*/

// When the user clicks the start came button in the modal, it closes the modal and begins the game
startButton.onclick = function () {
  beginGame();
  manageCalculator();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  beginGame();
  manageCalculator();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    beginGame();
    manageCalculator();
  }
};

/**
 * Manages the display of question text within the stats container based on the current window width.
 *
 * This function dynamically updates the display text of the element with id "question-stat" based on the window's inner width.
 * If the window width is less than 400px, the function sets the display text to "Q". Otherwise, it sets the display text to "Question".
 */
const questionTextManager = function () {
  if (window.innerWidth < 400) {
    this.document.getElementById("question-stat").innerHTML = "Q";
  } else {
    this.document.getElementById("question-stat").innerHTML = "Question";
  }
};

/**
 * Manages the display of the calculator based on the current window width.
 *
 * This function dynamically appends a calculator to the DOM or removes it based on the window's inner width.
 * If the window width is less than 400px and the calculator is not yet added, the function creates and appends a calculator.
 * If the window width is equal or larger than 400px and the calculator exists, it removes the calculator from the DOM.
 *
 * The calculator consists of a display input element and a set of buttons, each assigned a unique value.
 * Clicking a button will trigger a calculation function that updates the display's value based on the clicked button's value.
 */
const manageCalculator = function () {
/* Calculator code and outline attributed to Coding Nepal's Website Code*/
  // Get the calculator div
  const calculatorDiv = document.getElementById("calculator");

  // Check if screen size is less than 400px
  if (window.innerWidth < 400) {
    // Check if calculator is not added yet
    if (!calculatorAdded) {
      // create main calculator container
      const container = document.createElement("div");
      container.className = "container";
      container.id = "calculator-container";

      // create and append display input
      const display = document.getElementById("answer");

      // create and append buttons container
      const buttons = document.createElement("div");
      buttons.className = "buttons";
      container.appendChild(buttons);

      // define button values
      const buttonValues = [
        "AC",
        "DEL",
        "7",
        "8",
        "9",
        "4",
        "5",
        "6",
        "1",
        "2",
        "3",
        "0",
      ];

      // define function to calculate based on button clicked
      let output = "";
      const calculate = (btnValue) => {
        display.focus();
        if (btnValue === "AC") {
          output = "";
        } else if (btnValue === "DEL") {
          output = output.slice(0, -1);
        } else {
          output += btnValue;
        }
        display.value = output;
      };

      // create, configure and append buttons
      buttonValues.forEach((value) => {
        const button = document.createElement("button");
        button.className = "calc-button";
        button.dataset.value = value;
        button.innerText = value;
        button.addEventListener("click", () => calculate(value));
        buttons.appendChild(button);
      });

      // append the calculator to the calculator div
      calculatorDiv.appendChild(container);

      // set calculatorAdded to true
      calculatorAdded = true;
    }
  } else {
    // if calculator exists, remove it
    let container = document.getElementById("calculator-container");
    if (container) {
      calculatorDiv.removeChild(container);
    }
    // set calculatorAdded to false
    calculatorAdded = false;
  }
};

// timer object which contains data and methods to control the timer displayed in time 'time' element
let timer = {
  //timer set to 60 seconds at the beginning
  time: 60,
  //every second the tiner will decrease by 1
  secondInterval: 1000,
  start: function intervalSetter() {
    setInterval(function () {
      timer.time--;
      //display the time in the time element
      document.getElementById("time").innerHTML = timer.time;
      //change the background color of the time element depending on the time left
      if (timer.time > 40) {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-secondary-green )";
      } else if (timer.time > 10 && timer.time <= 40) {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-warning-amber)";
      } else {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-warning-red)";
      }
      //if the time is up, submit 0 as an answer and check the answer
      // 0 is guaranteed to be an incorrect answer so the user will not pass the question
      if (timer.time === 0) {
        const display = document.getElementById("answer");
        display.value = 0;
        alert("Time is up!");
        checkAnswer();
      }
    }, 1000);
  },
  //reset the timer to 60 seconds
  reset: function () {
    timer.time = 60;
  },
};

// when the window size changes, the calculator is added or removed as necessary
window.addEventListener("resize", manageCalculator);

// when the window size changes, the question text is adjusted as necessary
window.addEventListener("resize", questionTextManager);
