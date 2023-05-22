import { checkAnswer } from "./index.js";

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

export let timer =  {
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

            if (timer.time === 0){
              const display = document.getElementById('answer');
              display.value = 0;
              alert("Time is up!");
              checkAnswer();
            }
    } , 1000)},

    reset: function(){
        timer.time = 60;
    }
}


export const answerObject = (answer, correctAnswer, questionNumber,  isCorrect, time, level) => {

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


