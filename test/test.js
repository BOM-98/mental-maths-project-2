import { assert } from 'chai';
import sinon from 'sinon';
import {generateNum1} from '../assets/js/math-functions.js';
import {gameLevelSettings} from '../assets/js/data-structures.js';

describe('generateNum1 function', function() {


  afterEach(function() {
    // Restore the default sandbox after each test
    sinon.restore();
  });

  it('should generate a number within the correct range for addition gameType, Level 1', function() {
    const gameType = 'addition';
    const level = 1;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, Level 2', function() {
    const gameType = 'addition';
    const level = 2;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 3', function() {
    const gameType = 'addition';
    const level = 3;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 4', function() {
    const gameType = 'addition';
    const level = 4;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for addition gameType, level 5', function() {
    const gameType = 'addition';
    const level = 5;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][0].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][0].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 1', function() {
    const gameType = 'subtract';
    const level = 1;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 2', function() {
    const gameType = 'subtract';
    const level = 2;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 3', function() {
    const gameType = 'subtract';
    const level = 3;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 4', function() {
    const gameType = 'subtract';
    const level = 4;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
  });

  it('should generate a number within the correct range for subtraction gameType, Level 5', function() {
    const gameType = 'subtract';
    const level = 5;
    sinon.stub(Math, 'random').returns(0.5); // Middle of the range
    const num1 = generateNum1(gameType, level);

    assert.isAtLeast(num1, gameLevelSettings[level][1].num1.min, 'Generated number is not less than minimum');
    assert.isAtMost(num1, gameLevelSettings[level][1].num1.max, 'Generated number is not greater than maximum');
  });
});