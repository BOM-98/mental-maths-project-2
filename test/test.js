import { assert } from 'chai';
import sinon from 'sinon';
import {generateNum1} from '../assets/js/math-functions.js';
import {gameLevelSettings} from '../assets/js/data-structures.js';

describe('generateNum1 function', function() {


  afterEach(function() {
    // Restore the default sandbox after each test
    sinon.restore();
  });

  const testValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  testValues.forEach(function(testValue) {

  it('should generate a number within the correct range for addition gameType, Level 1', function() {

    const gameType = 'addition';
    const level = 1;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 1, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, Level 2', function() {
    const gameType = 'addition';
    const level = 2;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 10, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 3', function() {
    const gameType = 'addition';
    const level = 3;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 4', function() {
    const gameType = 'addition';
    const level = 4;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 5', function() {
    const gameType = 'addition';
    const level = 5;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 10', function() {
    const gameType = 'addition';
    const level = 10;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 1000, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 10000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 16', function() {
    const gameType = 'addition';
    const level = 16;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 10000, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 1', function() {
    const gameType = 'subtract';
    const level = 1;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 1, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 2', function() {
    const gameType = 'subtract';
    const level = 2;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 10, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 3', function() {
    const gameType = 'subtract';
    const level = 3;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 10, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 4', function() {
    const gameType = 'subtract';
    const level = 4;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 5', function() {
    const gameType = 'subtract';
    const level = 5;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 10', function() {
    const gameType = 'subtract';
    const level = 10;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 100, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 1000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 16', function() {
    const gameType = 'subtract';
    const level = 16;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
    assert.isAtLeast(num1, 10000, 'Generated number is not less than minimum');
    assert.isAtMost(num1, 100000, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for multiplication gameType, Level 1', function() {
    const gameType = 'multiply';
    const level = 1;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for multiplication gameType, Level 2', function() {
    const gameType = 'multiply';
    const level = 2;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for multiplication gameType, Level 3', function() {
    const gameType = 'multiply';
    const level = 3;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for multiplication gameType, Level 4', function() {
    const gameType = 'multiply';
    const level = 4;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for multiplication gameType, Level 5', function() {
    const gameType = 'multiply';
    const level = 5;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for multiplication gameType, Level 10', function() {
    const gameType = 'multiply';
    const level = 10;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for multiplication gameType, Level 16', function() {
    const gameType = 'multiply';
    const level = 16;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][2].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][2].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for division gameType, Level 1', function() {
    const gameType = 'division';
    const level = 1;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for division gameType, Level 2', function() {
    const gameType = 'division';
    const level = 2;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for division gameType, Level 3', function() {
    const gameType = 'division';
    const level = 3;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for division gameType, Level 4', function() {
    const gameType = 'division';
    const level = 4;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for division gameType, Level 5', function() {
    const gameType = 'division';
    const level = 5;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);
  
    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
  
  it('should generate a number within the correct range for division gameType, Level 10', function() {
    const gameType = 'division';
    const level = 10;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for division gameType, Level 16', function() {
    const gameType = 'division';
    const level = 16;
    sinon.stub(Math, 'random').returns(testValue); // testValue is the value passed into the function
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][3].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][3].num1.max, 'Generated number is not greater than maximum');
  });
});
});