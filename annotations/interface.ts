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