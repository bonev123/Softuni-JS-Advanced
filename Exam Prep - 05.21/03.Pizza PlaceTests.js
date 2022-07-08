const { assert, expect} = require('chai')
const pizzUni = require('./03.Pizza Place');

describe("Tests …", () => {
    describe("makeAnOrder", function() {

        it("empty", function() {
            assert.throw(() => pizzUni.makeAnOrder({}), 'You must order at least 1 Pizza to finish the order.')
        });
        it('only pizza', () => {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'margarita'}), `You just ordered margarita`)
        })
        it('pizza and drinks', () => {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'margarita', orderedDrink: 'cola'}), `You just ordered margarita and cola.`)
        })
    })
    describe("getRemainingWork", function() {
        it('preparing', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'margarita', status: 'preparing'}, {pizzaName: 'b', status: 'preparing'}]), `The following pizzas are still preparing: margarita, b.`)
            
        })
        it('ready', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'margarita', status: 'ready'}]), 'All orders are complete!')
        })
    })
    describe('orderType', () => {
        it('both cases', () => {
            assert.equal(pizzUni.orderType(10, 'Delivery'), 10)
            assert.equal(pizzUni.orderType(10, 'Carry Out'), 9)

        })
    })
});
