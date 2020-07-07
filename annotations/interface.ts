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



interface  Reportable {
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

const drinks = {
    color: 'brown',
    cabornated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
};

const printSummary = (item: Reportable): void => {
    // console.log(`Name ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken:  ${vehicle.broken}`)
    console.log(item.summary())
};

printSummary(olderCivic)
printSummary(drinks)
// ^^ a condensed interface definition

//Reportable --> has a summary function that returns a string

// we can use interface with extremely different objects and properties
//we can have those objects or properties implement different functions
//by doing so this encourages us to write generic functions

// Interface Reportable 
// Reportable is gatekeeper to 'printSummary'


// General strategy for reusable code in TS

// Create functions that accept arguments that 
//are typed with interfaces

//Objects & classes can decide to implement a given interface to
//work with a function

