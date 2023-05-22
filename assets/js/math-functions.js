import {timer, digitParameters, gameLevelSettings} from "./data-structures.js";
import {answerArray} from "./index.js";

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
export function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return operand1 + operand2;
    } else if (operator === "-"){
        return operand1 - operand2;
    } else if (operator === "x"){
        return operand1 * operand2;
    } else if (operator === "/"){
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
 export function numeratorGenerator(num2){
    let multiplier = Math.floor(Math.random() * 25) + 2;
    let numerator = num2 * multiplier;
    return numerator;
};

export function incrementQuestion (){
    let questionNumber = parseInt(document.getElementById('question').innerText);
    questionNumber++;
    document.getElementById('question').innerText = questionNumber;
}

export function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

export function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

export function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

export function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}

export function updatePercentage (){
    let percentPasses = Math.round((answerArray.filter(answer => answer.passes === true).length / answerArray.length) * 100);
    if (isNaN(percentPasses)){
        percentPasses = 0;
    } else {
    document.getElementById('percentage').innerText = percentPasses + "%";
    };

    if (percentPasses > 85){
        document.getElementsByClassName('green-container')[0].style.backgroundColor = "var(--global-color-secondary-green )";
    } else if (percentPasses > 60){
        document.getElementsByClassName('green-container')[0].style.backgroundColor = "var(--global-color-warning-amber)";
    } else {
        document.getElementsByClassName('green-container')[0].style.backgroundColor = "var(--global-color-warning-red)";
    }
}


export function generateNum1 (gameType, level){
    let index;
    if (gameType === "addition"){
        index = 0;
    } else if (gameType === "subtract"){
        index = 1;
    } else if (gameType === "multiply"){
        index = 2;
    } else if (gameType === "division"){
        index = 3;
    }

    let returnNum1 = Math.floor(Math.random() * (gameLevelSettings[level][index].num1.max - gameLevelSettings[level][index].num1.min + 1)) + gameLevelSettings[level][index].num1.min;
    return returnNum1;
}

export function generateNum2 (gameType, level){
    let index;
    if (gameType === "addition"){
        index = 0;
    } else if (gameType === "subtract"){
        index = 1;
    } else if (gameType === "multiply"){
        index = 2;
    } else if (gameType === "division"){
        index = 3;
    }
    let num2 = Math.floor(Math.random() * (gameLevelSettings[level][index].num2.max - gameLevelSettings[level][index].num2.min + 1)) + gameLevelSettings[level][index].num2.min;
    return num2;
}

export function adjustLevel() {
    let gameLevel = parseInt(document.getElementById('level').innerText);
    let lastFiveElements = answerArray.slice(-5);
    let allSameLevel = lastFiveElements.every(answer => answer.level === gameLevel);
    let passes = answerArray.filter(answer => answer.passes === true).length;

    if (answerArray.length < 5) {
        return 0;
    } else {
        if (passes / answerArray.length >= 0.85 && allSameLevel) {
            gameLevel++;
            document.getElementById('level').innerText = gameLevel;
            return gameLevel;
        } else {
            return gameLevel;
        }
    }
}