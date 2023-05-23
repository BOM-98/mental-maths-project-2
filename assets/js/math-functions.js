import {
  gameLevelSettings
} from "./data-structures.js";

/**
 * Calculate the result of the operation.
 * This function fetches operand1, operand2, and operator from the HTML document.
 * It then performs the corresponding operation and returns the result.
 * For the operators '+', '-', 'x', and '/', the operation is performed and the result returned.
 * For any other operator, an alert is shown and an error is thrown.
 *
 * @returns {Number} - The result of the operation.
 * @throws {String} - If the operator is not supported.
 */
export function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "x") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  } else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
  }
}

/**
 * The `gameDecider` function determines the type of arithmetic operation for the game.
 * It generates a random number between 1 and 4 (inclusive), each representing a different operation.
 *
 * @returns {string} The type of arithmetic operation for the game.
 * "addition" if the generated number is 1,
 * "subtract" if the generated number is 2,
 * "multiply" if the generated number is 3,
 * "division" if the generated number is 4.
 */
export let gameDecider = function () {
  let typeNumber = Math.floor(Math.random() * 4) + 1;

  if (typeNumber === 1) {
    return "addition";
  } else if (typeNumber === 2) {
    return "subtract";
  } else if (typeNumber === 3) {
    return "multiply";
  } else if (typeNumber === 4) {
    return "division";
  }
};

/**
 * Generates a numerator for a fraction operation.
 * The numerator is calculated as a product of num2 and a random integer between 2 and 26 (inclusive).
 *
 * @param {Number} num2 - The denominator of the fraction.
 * @returns {Number} - The generated numerator.
 */
export function numeratorGenerator(num2) {
  let multiplier = Math.floor(Math.random() * 25) + 2;
  let numerator = num2 * multiplier;
  return numerator;
}

/**
 * incrementQuestion increments the current question number by one.
 */
export function incrementQuestion() {
  let questionNumber = parseInt(document.getElementById("question").innerText);
  questionNumber++;
  document.getElementById("question").innerText = questionNumber;
}

/**
 * displayAdditionQuestion displays an addition question with the given operands.
 * @param {number} operand1 - The first operand in the question.
 * @param {number} operand2 - The second operand in the question.
 */
export function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

/**
 * displaySubtractQuestion displays a subtraction question with the given operands.
 * @param {number} operand1 - The first operand in the question.
 * @param {number} operand2 - The second operand in the question.
 */
export function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "-";
}

/**
 * displayMultiplyQuestion displays a multiplication question with the given operands.
 * @param {number} operand1 - The first operand in the question.
 * @param {number} operand2 - The second operand in the question.
 */
export function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

/**
 * displayDivisionQuestion displays a division question with the given operands.
 * @param {number} operand1 - The first operand in the question.
 * @param {number} operand2 - The second operand in the question.
 */
export function displayDivisionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "/";
}

/**
 * updatePercentage updates the percentage of correct answers and updates the DOM based on the percentage.
 * It calculates the percentage of correct answers, updates the 'percentage' element on the page,
 * and changes the background color of the 'green-container' element depending on the percentage.
 *
 * It iterates through the answerArray and evaluates the 'passes' key in each object to determine whether
 * the answer was correct.
 *
 * Background color rules:
 * - If the percentage of correct answers is greater than 85%, the color is set to --global-color-secondary-green.
 * - If the percentage of correct answers is between 60% and 85%, the color is set to --global-color-warning-amber.
 * - If the percentage of correct answers is less than or equal to 60%, the color is set to --global-color-warning-red.
 */
export function updatePercentage(answerArray) {
  let percentPasses = Math.round(
    (answerArray.filter((answer) => answer.passes === true).length /
      answerArray.length) *
      100
  );
  if (isNaN(percentPasses)) {
    percentPasses = 0;
  } else {
    document.getElementById("percentage").innerText = percentPasses + "%";
  }

  if (percentPasses > 85) {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-secondary-green )";
  } else if (percentPasses > 60) {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-warning-amber)";
  } else {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-warning-red)";
  }
}

/**
 * generateNum1 generates a random number within a range based on the provided game type and level.
 * The game type determines which range of values to use from the gameLevelSettings array.
 * The level determines which set of ranges containing maxiumum and minimum numbers to use within the selected game type.
 * The generated number is used as the first operand (num1) in the game's arithmetic operation.
 *
 * @param {string} gameType - The type of game, can be one of the following: "addition", "subtract", "multiply", "division".
 * @param {string} level - The difficulty level of the game.
 *
 * @returns {number} returnNum1 - A random number within the defined range for the specified game type and level.
 *
 */
export function generateNum1(gameType, level) {
  let index;
  if (gameType === "addition") {
    index = 0;
  } else if (gameType === "subtract") {
    index = 1;
  } else if (gameType === "multiply") {
    index = 2;
  } else if (gameType === "division") {
    index = 3;
  }

  let returnNum1 =
    Math.floor(
      Math.random() *
        (gameLevelSettings[level][index].num1.max -
          gameLevelSettings[level][index].num1.min +
          1)
    ) + gameLevelSettings[level][index].num1.min;
  return returnNum1;
}

/**
 * generateNum2 generates a random number within a range based on the provided game type and level.
 * The game type determines which range of values to use from the gameLevelSettings array.
 * The level determines which set of ranges containing maxiumum and minimum numbers to use within the selected game type.
 * The generated number is used as the first operand (num1) in the game's arithmetic operation.
 *
 * @param {string} gameType - The type of game, can be one of the following: "addition", "subtract", "multiply", "division".
 * @param {string} level - The difficulty level of the game.
 *
 * @returns {number} Num2 - A random number within the defined range for the specified game type and level.
 */
export function generateNum2(gameType, level) {
  let index;
  if (gameType === "addition") {
    index = 0;
  } else if (gameType === "subtract") {
    index = 1;
  } else if (gameType === "multiply") {
    index = 2;
  } else if (gameType === "division") {
    index = 3;
  }
  let num2 =
    Math.floor(
      Math.random() *
        (gameLevelSettings[level][index].num2.max -
          gameLevelSettings[level][index].num2.min +
          1)
    ) + gameLevelSettings[level][index].num2.min;
  return num2;
}

/**
 * adjustLevel adjusts the level of the game based on the player's performance.
 * If the player has answered correctly 85% of the time or more and all of the last five answers were on the same level,
 * the level increases by one. If these conditions are not met, the level remains the same.
 *
 * @returns {number} - The game's current level. If the player has answered fewer than 4 questions since the beginning of the game, it returns 0.
 *
 * Note: The function uses a global variable 'answerArray', which is an array of objects where
 * each object has properties 'level' (indicating the level of that question) and 'passes' (a boolean indicating
 * whether the player answered correctly).
 */
export function adjustLevel(answerArray) {
  let gameLevel = parseInt(document.getElementById("level").innerText);
  let lastFourElements = answerArray.slice(-4);
  let allSameLevel = lastFourElements.every(
    (answer) => answer.level === gameLevel
  );
  let passes = answerArray.filter((answer) => answer.passes === true).length;

  if (answerArray.length < 4) {
    return 0;
  } else {
    if (passes / answerArray.length >= 0.85 && allSameLevel) {
      gameLevel++;
      document.getElementById("level").innerText = gameLevel;
      return gameLevel;
    } else {
      return gameLevel;
    }
  }
}
