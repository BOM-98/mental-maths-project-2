// digitParameters contains the information for the min and max values for each digit.
// Each operation (addition, subtraction, multiplication, division) has 5 levels of diffiuclty.
// Depending on the level the user is on in the game, the min and max values for each digit will change.
// The functions generateNum1 and generateNum2 reference this object to generate the sums for the game.
export let digitParameters = {
  addition: {
    1: {
      num1: { min: 1, max: 100 },
      num2: { min: 1, max: 10 },
    },
    2: {
      num1: { min: 10, max: 100 },
      num2: { min: 10, max: 100 },
    },
    3: {
      num1: { min: 100, max: 1000 },
      num2: { min: 10, max: 100 },
    },
    4: {
      num1: { min: 1000, max: 10000 },
      num2: { min: 100, max: 1000 },
    },
    5: {
      num1: { min: 10000, max: 100000 },
      num2: { min: 1000, max: 10000 },
    },
  },
  subtract: {
    1: {
      num1: { min: 1, max: 100 },
      num2: { min: 1, max: 10 },
    },
    2: {
      num1: { min: 10, max: 100 },
      num2: { min: 10, max: 100 },
    },
    3: {
      num1: { min: 100, max: 1000 },
      num2: { min: 10, max: 100 },
    },
    4: {
      num1: { min: 1000, max: 10000 },
      num2: { min: 100, max: 1000 },
    },
    5: {
      num1: { min: 10000, max: 100000 },
      num2: { min: 1000, max: 10000 },
    },
  },
  multiply: {
    1: {
      num1: { min: 1, max: 12 },
      num2: { min: 1, max: 12 },
    },
    2: {
      num1: { min: 1, max: 100 },
      num2: { min: 1, max: 12 },
    },
    3: {
      num1: { min: 1, max: 100 },
      num2: { min: 1, max: 100 },
    },
    4: {
      num1: { min: 1, max: 1000 },
      num2: { min: 1, max: 100 },
    },
    5: {
      num1: { min: 1, max: 1000 },
      num2: { min: 1, max: 1000 },
    },
  },
  division: {
    1: {
      num1: { min: 1, max: 12 },
      num2: { min: 1, max: 12 },
    },
    2: {
      num1: { min: 1, max: 100 },
      num2: { min: 1, max: 12 },
    },
    3: {
      num1: { min: 1, max: 10000 },
      num2: { min: 1, max: 100 },
    },
    4: {
      num1: { min: 1, max: 100000 },
      num2: { min: 1, max: 100 },
    },
    5: {
      num1: { min: 1, max: 1000000 },
      num2: { min: 1, max: 1000 },
    },
  },
};

// gameLevelSettings determines what objects in the digitParameters object to use for each level.
export let gameLevelSettings = [
  // Levels 0-1: Basic Level Addition and Subtraction
  /*0*/ [
    digitParameters.addition[1],
    digitParameters.subtract[1],
    digitParameters.multiply[1],
    digitParameters.division[1],
  ],
  /*1*/ [
    digitParameters.addition[2],
    digitParameters.subtract[1],
    digitParameters.multiply[1],
    digitParameters.division[1],
  ],

  // Levels 2-11: Intermediate Level Addition, Subtraction, Multiplication, Division
  /*2*/ [
    digitParameters.addition[2],
    digitParameters.subtract[2],
    digitParameters.multiply[1],
    digitParameters.division[1],
  ],
  /*3*/ [
    digitParameters.addition[3],
    digitParameters.subtract[2],
    digitParameters.multiply[1],
    digitParameters.division[1],
  ],
  /*4*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[1],
    digitParameters.division[1],
  ],
  /*5*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[2],
    digitParameters.division[1],
  ],
  /*6*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[2],
    digitParameters.division[2],
  ],
  /*7*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[2],
    digitParameters.division[2],
  ],
  /*8*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[3],
    digitParameters.division[2],
  ],
  /*9*/ [
    digitParameters.addition[3],
    digitParameters.subtract[3],
    digitParameters.multiply[3],
    digitParameters.division[3],
  ],
  /*10*/ [
    digitParameters.addition[4],
    digitParameters.subtract[3],
    digitParameters.multiply[3],
    digitParameters.division[3],
  ],
  /*12*/ [
    digitParameters.addition[4],
    digitParameters.subtract[4],
    digitParameters.multiply[3],
    digitParameters.division[3],
  ],
  /*13*/ [
    digitParameters.addition[4],
    digitParameters.subtract[4],
    digitParameters.multiply[4],
    digitParameters.division[3],
  ],
  /*14*/ [
    digitParameters.addition[4],
    digitParameters.subtract[4],
    digitParameters.multiply[4],
    digitParameters.division[4],
  ],

  // Levels 15-18: Genius Level Addition, Subtraction, Multiplication, Division
  /*15*/ [
    digitParameters.addition[5],
    digitParameters.subtract[4],
    digitParameters.multiply[4],
    digitParameters.division[4],
  ],
  /*16*/ [
    digitParameters.addition[5],
    digitParameters.subtract[5],
    digitParameters.multiply[4],
    digitParameters.division[4],
  ],
  /*17*/ [
    digitParameters.addition[5],
    digitParameters.subtract[5],
    digitParameters.multiply[5],
    digitParameters.division[4],
  ],
  /*18*/ [
    digitParameters.addition[5],
    digitParameters.subtract[5],
    digitParameters.multiply[5],
    digitParameters.division[5],
  ],
];

/**
 * Creates and returns an answer object for a game question.
 *
 * This function takes in various parameters related to a game question and answer,
 * determines whether the question is passed or not based on the correctness and time,
 * and returns an object containing all this information.
 *
 * @param {number|string} answer - The answer provided by the player.
 * @param {number|string} correctAnswer - The correct answer for the question.
 * @param {number} questionNumber - The current question number.
 * @param {boolean} isCorrect - Indicates whether the provided answer is correct.
 * @param {number} time - The remaining time when the answer was submitted.
 * @param {number} level - The current level of the game.
 * @returns {object} Returns an object containing all the details about the answer, question, and game state.
 */
export const answerObject = (
  answer,
  correctAnswer,
  questionNumber,
  isCorrect,
  time,
  level
) => {
  let passed;
  // if the answer is correct and the time is greater than 0, the question is passed
  if (isCorrect === true && time > 0) {
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
    level: level,
  };
};
