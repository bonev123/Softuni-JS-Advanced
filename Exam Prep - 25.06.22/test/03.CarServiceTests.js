const { expect, assert } = require('chai')
const carService = require('../03. Car service_Resources.js');

describe('Tests', () => {
    describe("isItExpensive", () => {
        it('engine and transmission', () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)

        })
    
        it('notSuitable', () => {
            assert.equal(carService.isItExpensive('Clutch'), `The overall price will be a bit cheaper`)
        })
    })

    describe('discount', () => {
        it('15%', () => {
            assert.equal(carService.discount(3, 90), `Discount applied! You saved 13.5$`)

        })
        it('30%', () => {
            assert.equal(carService.discount(9, 90), `Discount applied! You saved 27$`)

        })
        it('no discount', () => {
            assert.equal(carService.discount(1, 90), `You cannot apply a discount`)

        })
        it('invalid data throws', () => {
            assert.throw(() => carService.discount('f', "asd"), `Invalid input`)

        })
    })
    describe('partsToBuy', () => {
        it('available parts catalogue', () => {
            assert.deepEqual(carService.partsToBuy([{ part: "valve", price: 145}], ["valve"]), 145)
        })
        it('empty parts catalogue', () => {
            assert.deepEqual(carService.partsToBuy([], ["valve"]), 0)

        })
        
    })

});