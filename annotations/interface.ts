//Interfaces: 
// Creates a new type describing the property names
// and value types of an object
// A custom type the developer will design

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken:  ${vehicle.broken}`)
}

printVehicle(oldCivic)

// Instead, create and interface at the very top of the code 
// new example

// anytime you create an interface, 
//you create a new type ** Always use a capital letter



interface  Vehicle {
    // name: string
    // year: number
    // broken: boolean
    summary(): string 
}

const olderCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const printVehicles = (vehicle: Vehicle): void => {
    // console.log(`Name ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken:  ${vehicle.broken}`)
    console.log(vehicle.summary())
};

printVehicles(olderCivic)