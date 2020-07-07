// Classes

// Blueprint to create and object with some fields
// (values) and methods (functions) to represent a 'thing

// Classes FIRST

// define a set of fields (values) and methods (functions)
//to represent a 'thing'

//SECONDLY they define a set of fields (values) and
// methodes (functions) to represent a 'thing'

// ALWAYS capitalize a name of a class

class Vehicle {
    drive(): void {
        console.log('vroom vroom')
    }

    honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle () 
vehicle.drive()
vehicle.honk()
