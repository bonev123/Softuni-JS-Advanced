class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`)
        }
        let newPlant = {
            plantName:plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(newPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if(quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if(!this.plants.some(p => p.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let selectedPlant = this.plants.find(p => p.plantName === plantName)
        if(selectedPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        selectedPlant.ripe = true
        selectedPlant.quantity += quantity
        if(quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        if(quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        if(!this.plants.some(p => p.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let selectedPlant = this.plants.find(p => p.plantName === plantName)
        if(selectedPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let index = this.plants.indexOf(selectedPlant);
        this.plants.splice(index, 1);
        let storagePlant = {
            plantName:selectedPlant.plantName,
            quantity: selectedPlant.quantity
        }
        this.storage.push(storagePlant);
        this.spaceAvailable += this.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        const result = 
            `The garden has ${this.spaceAvailable} free space left.`
            this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            result += `Plants in the garden: ${this.plantName}`
        return result;
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



