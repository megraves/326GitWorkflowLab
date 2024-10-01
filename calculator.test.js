// tests/calculator.test.js
const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    it('should store a value in memory', function() {
        assert.strictEqual(calculator.memoryStore(10), 10);
    });

    it('should recall the value from memory', function() {
        calculator.memoryStore(20);
        assert.strictEqual(calculator.memoryRecall(), 20);
    });

    it('should clear the memory', function() {
        calculator.memoryStore(30);
        calculator.memoryClear();
        assert.strictEqual(calculator.memoryRecall(), 0);
    });
});

// Test display operations (assuming appendToDisplay logic is inside calculator.js)
describe('Calculator Display Functions', function() {
    // TODO: appendToDisplay function
});

// Test calculation functions
describe('Calculator Calculation Functions', function() {
    // TODO: Add tests for other calculation functions
});
