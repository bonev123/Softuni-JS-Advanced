const { expect, assert } = require('chai')
const movieTheater = require('../03. Movie Theater _Resources.js');

describe('Tests', () => {
    describe("ageRestrictions", () => {
        it('happy cases', () => {
            assert.equal(movieTheater.ageRestrictions('G'), `All ages admitted to watch the movie`)
            assert.equal(movieTheater.ageRestrictions('PG'), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
            assert.equal(movieTheater.ageRestrictions('R'), `Restricted! Under 17 requires accompanying parent or adult guardian`)
            assert.equal(movieTheater.ageRestrictions('NC-17'), `No one under 17 admitted to watch the movie`)


        })
    
        it('notSuitable', () => {
            assert.equal(movieTheater.ageRestrictions('abc'), `There are no age restrictions for this movie`)
        })
    })

    describe("moneySpent", () => {
        it('happy cases', () => {
            assert.equal(movieTheater.moneySpent(1,['Popcorn'], ['Soda']), `The total cost for the purchase is 22.00`)
            assert.equal(movieTheater.moneySpent(3,['Popcorn'], ['Soda']), `The total cost for the purchase with applied discount is 41.60`)

            //assert.equal(movieTheater.moneySpent('PG'), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
            //assert.equal(movieTheater.moneySpent('R'), `Restricted! Under 17 requires accompanying parent or adult guardian`)
            //assert.equal(movieTheater.ageRestrictions('NC-17'), `No one under 17 admitted to watch the movie`)


        })
    
        it('invalid', () => {
            assert.throw(() => movieTheater.moneySpent('f', "asd", "asd"), `Invalid input`)
        })
    })

    describe("reservation", () => {
        it('happy cases', () => {
            //assert.equal(movieTheater.reservation(1,['Popcorn'], ['Soda']), `The total cost for the purchase is 22.00`)
            //assert.equal(movieTheater.reservation(3,['Popcorn'], ['Soda']), `The total cost for the purchase with applied discount is 41.60`)

            //assert.equal(movieTheater.moneySpent('PG'), `Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
            //assert.equal(movieTheater.moneySpent('R'), `Restricted! Under 17 requires accompanying parent or adult guardian`)
            //assert.equal(movieTheater.ageRestrictions('NC-17'), `No one under 17 admitted to watch the movie`)

            assert.deepEqual(movieTheater.reservation([{ rowNumber: 1, freeSeats: 4}], 2), 1)

        })
    
        it('invalid', () => {
            assert.throw(() => movieTheater.reservation('f', "asd"), `Invalid input`)
        })
    })

});