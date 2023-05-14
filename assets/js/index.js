//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeres to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
      }
    });
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
  function gameDecider() {
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
  }

  document
    .getElementById("answer-box")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });

    //Run the game with the input from the gameDecider function determining whether the sum will be addition, subtraction, multiplication or division
  runGame(gameDecider());
});


/**
 * The `runGame` function starts a new round of the game with the given gameType.
 * It first clears the previous answer and sets focus on the answer field.
 * Then, it generates two random numbers and calls the appropriate function
 * to display the question based on the gameType.
 *
 * @param {string} gameType - The type of arithmetic operation for the game (addition, subtract, multiply, division).
 * @throws {string} Will throw an error if the provided gameType is not recognized.
 */
function runGame(gameType){

    // Clear the answer field and set focus on it
    document.getElementById('answer').value = "";
    document.getElementById('answer').focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Depending on the gameType, display the appropriate question
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division"){
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
function checkAnswer(){

    // Get the user's answer from input field and parse it as an integer
    let userAnswer = parseInt(document.getElementById('answer').value);

    // Calculate the correct answer
    let calculatedAnswer = calculateCorrectAnswer();

    // Check if the user's answer is equal to the correct answer
    let isCorrect = userAnswer === calculatedAnswer;

    // If the answer is correct, display a congratulatory message
    // Otherwise, display a message showing the correct answer
    if(isCorrect){
        alert("Correct Answer - Well Done!");
    } else {
        alert(`${userAnswer} is incorrect. The correct answer was ${calculatedAnswer}!`);
    };

    // Start a new round of the game with a randomly decided game type
    runGame(gameDecider());
}


function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return operand1 + operand2;
    } else if (operator === "-"){
        return operand1 - operand2;
    } else if (operator === "*"){
        return operand1 * operand2;
    } else if (operator === "/"){
        return operand1 / operand2;
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}
