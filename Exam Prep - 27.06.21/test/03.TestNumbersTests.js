const { expect, assert } = require('chai')
const testNumbers = require('../03.TestNumbers');

describe("testNumbers", () => {
    describe("sumNumbers", () => {
        it('pos nums', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00')
        })
        it('neg nums', () => {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00')
        })
        it('non-nums', () => {
            assert.equal(testNumbers.sumNumbers('a', 'b'), undefined)
            assert.equal(testNumbers.sumNumbers('a', 1), undefined)
        })
    })
    describe("numberChecker", () => {
        it('even nums', () => {
            assert.equal(testNumbers.numberChecker(2), "The number is even!")
        })
        it('odd nums', () => {
            assert.equal(testNumbers.numberChecker(1), "The number is odd!")
        })
        it('non-numb', () => {
            assert.throw(() => testNumbers.numberChecker('a'), "The input is not a number!")
        })
    })
    describe("averageSumArray", () => {
        it('array', () => {
            assert.equal(testNumbers.averageSumArray([2,2,2]), 2)
            assert.equal(testNumbers.averageSumArray([-1,-1]), -1)
        })
    })
})
