const cinema = require('../app');
const { assert, expect } = require('chai');

describe('Cinema', () => {
    it('Empty array', () => {
        assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
    })
    it('movie list', () => {
        assert.deepEqual(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker')
    })
    it('ticketPrice', () => {
        assert.equal(cinema.ticketPrice('Premiere'), 12)
        assert.equal(cinema.ticketPrice('Normal'), 7.50)
        assert.equal(cinema.ticketPrice('Discount'), 5.50)
        assert.throw(() => cinema.ticketPrice('Invalid'), 'Invalid projection type.')
    })
    it('swapSeatsInHall', () => {
        assert.equal(cinema.swapSeatsInHall(2, undefined), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(undefined, 2), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(2), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(2.1, 2.1), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(21, 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(20, 0), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(20, -1), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(-1, 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(0, 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(20, 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall({}, 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall([], 20), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(19, []), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(19, {}), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(2, "Premiere"), "Unsuccessful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(2.1, 3.1), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall("Premiere", 2), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(true, 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(20, 13), "Successful change of seats in the hall.")
        assert.equal(cinema.swapSeatsInHall(1, 3), "Successful change of seats in the hall.")
    })
})