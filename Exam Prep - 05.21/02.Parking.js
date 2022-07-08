class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = []
        this.freeSpace = capacity
    }
 
    addCar(carModel, carNumber) {
        if (this.freeSpace <= 0) {
            throw new Error("Not enough parking space.")
        }
        this.vehicles.push({ carModel, carNumber, paid: false })
        this.freeSpace--
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
 
    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        if (car) {
            if (car.paid === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            } else {
                let index = this.vehicles.indexOf(car)
                this.vehicles.splice(index, 1)
                this.freeSpace++
                return `${carNumber} left the parking lot.`
            }
        } else {
            throw new Error("The car, you're looking for, is not found.")
        }
    }
 
    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.paid === true) {
            throw new Error(`${carNumber}'s driver has already paid his ticket.`)
        }
        car.paid = true
        return `${carNumber}'s driver successfully paid for his stay.`
    }
 
    getStatistics(carNumber) {
        let result = []
        result.push(`The Parking Lot has ${this.freeSpace} empty spots left.`)
        let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
 
        if (carNumber === undefined) {
            for (let car of sorted) {
                let isPaid = ''
                if (car.paid === false) {
                    isPaid = 'Not paid'
                } else {
                    isPaid = 'Has paid'
                }
                result.push(`${car.carModel} == ${car.carNumber} - ${isPaid}`)
            }
        } else {
            
            let car = this.vehicles.find(x => x.carNumber === carNumber)
            let isPaid = ''
            if(car === undefined){
                return ''
            }
            if (car.paid === false) {
                isPaid = 'Not paid'
            } else {
                isPaid = 'Has paid'
            }
            result.push(`${car.carModel} == ${car.carNumber} - ${isPaid}`)
        }
        return result.join('\n')
    }
 
}

const parking = new Parking(2);
 
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Lada 1600", "B8324KM"));
console.log(parking.getStatistics("B8324KM"));
 
console.log(parking.pay("TX3691CA"));
console.log(parking.pay("B8324KM"));
console.log(parking.removeCar("B8324KM"));
console.log(parking.getStatistics("B8324KM"));
