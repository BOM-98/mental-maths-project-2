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
