const cinema = require('../app');
const { assert, expect } = require('chai');

describe('cinema', () => {
    describe('showMovies', () => {
        it('empty array', () => {
           expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('corect input', () => {
            assert.strictEqual(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker')
        });
    });

    describe('ticketPrice', () => {
        it('incorrect input throw error', () => {
            expect(() => cinema.ticketPrice("something")).to.throw('Invalid projection type.');
        })
        it('corect input', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });

    describe('swapSeatsInHall', () => {
        it('Unsuccessful change only 1 number is passed', () => {
            expect(cinema.swapSeatsInHall(3)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Unsuccessful change numbers are not integers', () => {
            expect(cinema.swapSeatsInHall('abc', 6)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(6, 'abc')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Unsuccessful change greater than 20', () => {
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('Unsuccessful change when numbers are negative', () => {
            expect(cinema.swapSeatsInHall(-3, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('happy case', () => {
            expect(cinema.swapSeatsInHall(3, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
});