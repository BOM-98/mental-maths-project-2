

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

let answerArray = [];
let answerInstance;
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
  function checkAnswer(){
  
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

      adJustLevel();
  
      // Start a new round of the game with a randomly decided game type
      runGame(gameDecider());
      timer.reset();
  }
  
  
  function calculateCorrectAnswer(){
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
  
  function displayAdditionQuestion(operand1, operand2){
      document.getElementById('operand1').textContent = operand1;
      document.getElementById('operand2').textContent = operand2;
      document.getElementById('operator').textContent = "+";
  }
  
  function displaySubtractQuestion(operand1, operand2){
      document.getElementById('operand1').textContent = operand1;
      document.getElementById('operand2').textContent = operand2;
      document.getElementById('operator').textContent = "-";
  }
  
  function displayMultiplyQuestion(operand1, operand2){
      document.getElementById('operand1').textContent = operand1;
      document.getElementById('operand2').textContent = operand2;
      document.getElementById('operator').textContent = "x";
  
  }
  
  function displayDivisionQuestion(operand1, operand2){
      document.getElementById('operand1').textContent = operand1;
      document.getElementById('operand2').textContent = operand2;
      document.getElementById('operator').textContent = "/";
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
  let gameDecider = function () {
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

    function numeratorGenerator(num2){
        let multiplier = Math.floor(Math.random() * 25) + 2;
        let numerator = num2 * multiplier;
        return numerator;
    };


   let timer =  {
        time: 60,
        secondInterval: 1000,
        start: function intervalSetter (){setInterval(function(){
                timer.time--;
                document.getElementById('time').innerHTML = timer.time;
                if (timer.time > 40){
                    document.getElementsByClassName('time')[0].style.backgroundColor = "var(--global-color-secondary-green )";
                } else if (timer.time > 10 && timer.time <= 40){
                    document.getElementsByClassName('time')[0].style.backgroundColor = "var(--global-color-warning-amber)";
                } else {
                    document.getElementsByClassName('time')[0].style.backgroundColor = "var(--global-color-warning-red)";
                }
        } , 1000)},

        reset: function(){
            timer.time = 60;
        }
    }



    const answerObject = (answer, correctAnswer, questionNumber,  isCorrect, time, level) => {

        let passed; 

        if (isCorrect === true && time > 0){
            passed = true;
        } else {
            passed = false;
        }

        return {
            answer: answer,
            correctAnswer: correctAnswer,
            questionNumber: questionNumber,
            isCorrect: isCorrect,
            time: time,
            passes: passed,
            level: level
        }
    }

    function updatePercentage (){
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


    function incrementQuestion (){
        let questionNumber = parseInt(document.getElementById('question').innerText);
        questionNumber++;
        document.getElementById('question').innerText = questionNumber;
    }

    function adJustLevel() {
        gameLevel = parseInt(document.getElementById('level').innerText);
        let lastFiveElements = answerArray.slice(-5);
        let allSameLevel = lastFiveElements.every(answer => answer.level === gameLevel);
        let passes = answerArray.filter(answer => answer.passes === true).length;
        let check1 = answerArray.filter(answer => answer.passes === true).length;
        let check2 = answerArray.filter(answer => answer.passes === true).length / answerArray.length;
        let check3 = answerArray.slice(-5).filter(answer => {
            answer.level === gameLevel;
        }).length;

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





    let digitParameters = {
        addition: {
            1: {
                num1: {min: 1, max: 100},
                num2: {min: 1, max: 10}
            },
            2: {
                num1: {min: 10, max: 100},
                num2: {min: 10, max: 100}
            },
            3: {
                num1: {min: 100, max: 1000},
                num2: {min: 10, max: 100}
            },
            4: {
                num1: {min: 1000, max: 10000},
                num2: {min: 100, max: 1000}
            },
            5: {
                num1: {min: 10000, max: 100000},
                num2: {min: 1000, max: 10000}
            }
    },
        subtract: {
            1: {
                num1: {min: 1, max: 100},
                num2: {min: 1, max: 10}
            },
            2: {
                num1: {min: 10, max: 100},
                num2: {min: 10, max: 100}
            },
            3: {
                num1: {min: 100, max: 1000},
                num2: {min: 10, max: 100}
            },
            4: {
                num1: {min: 1000, max: 10000},
                num2: {min: 100, max: 1000}
            },
            5: {
                num1: {min: 10000, max: 100000},
                num2: {min: 1000, max: 10000}
            }
    },
        multiply: {
            1: {
                num1: {min: 1, max: 12},
                num2: {min: 1, max: 12}
            },
            2: {
                num1: {min: 1, max: 100},
                num2: {min: 1, max: 12}
            },
            3: {
                num1: {min: 1, max: 100},
                num2: {min: 1, max: 100}
            }, 
            4: {
                num1: {min: 1, max: 1000},
                num2: {min: 1, max: 100}
            },
            5: {
                num1: {min: 1, max: 1000},
                num2: {min: 1, max: 1000}
            }
    },
        division: {
            1: {
                num1: {min: 1, max: 12},
                num2: {min: 1, max: 12}
            },
            2: {
                num1: {min: 1, max: 100},
                num2: {min: 1, max: 12}
            },
            3: {
                num1: {min: 1, max: 10000},
                num2: {min: 1, max: 100}
            },
            4: {
                num1: {min: 1, max: 100000},
                num2: {min: 1, max: 100}
            },
            5: {
                num1: {min: 1, max: 1000000},
                num2: {min: 1, max: 1000}
            }
    }
    }

    let gameLevelSettings = [
        // Levels 0-1: Basic Level Addition and Subtraction
        /*0*/ [digitParameters.addition[1], digitParameters.subtract[1],digitParameters.multiply[1], digitParameters.division[1]],
        /*1*/[digitParameters.addition[2], digitParameters.subtract[2], digitParameters.multiply[1], digitParameters.division[1]],
    
        // Levels 2-11: Intermediate Level Addition, Subtraction, Multiplication, Division
        /*2*/[digitParameters.addition[2], digitParameters.subtract[2], digitParameters.multiply[1], digitParameters.division[1]],
        /*3*/[digitParameters.addition[3], digitParameters.subtract[2], digitParameters.multiply[1], digitParameters.division[1]],
        /*4*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[1], digitParameters.division[1]],
        /*5*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[2], digitParameters.division[1]],
        /*6*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[2], digitParameters.division[2]],
        /*7*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[2], digitParameters.division[2]],
        /*8*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[3], digitParameters.division[2]],
        /*9*/[digitParameters.addition[3], digitParameters.subtract[3], digitParameters.multiply[3], digitParameters.division[3]],
        /*10*/[digitParameters.addition[4], digitParameters.subtract[3], digitParameters.multiply[3], digitParameters.division[3]],
        /*12*/[digitParameters.addition[4], digitParameters.subtract[4], digitParameters.multiply[3], digitParameters.division[3]],
        /*13*/[digitParameters.addition[4], digitParameters.subtract[4], digitParameters.multiply[4], digitParameters.division[3]],
        /*14*/[digitParameters.addition[4], digitParameters.subtract[4], digitParameters.multiply[4], digitParameters.division[4]],
    
        // Levels 15-18: Genius Level Addition, Subtraction, Multiplication, Division
        /*15*/[digitParameters.addition[5], digitParameters.subtract[4], digitParameters.multiply[4], digitParameters.division[4]],
        /*16*/[digitParameters.addition[5], digitParameters.subtract[5], digitParameters.multiply[4], digitParameters.division[4]],
        /*17*/[digitParameters.addition[5], digitParameters.subtract[5], digitParameters.multiply[5], digitParameters.division[4]],
        /*18*/[digitParameters.addition[5], digitParameters.subtract[5], digitParameters.multiply[5], digitParameters.division[5]],
    ];

    function generateNum1 (gameType, level){
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

    function generateNum2 (gameType, level){
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



    /*The Modal*/

    // Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let startButton = document.getElementById("start");

startButton.onclick = function() {
    beginGame();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  beginGame();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    beginGame();
  }
}