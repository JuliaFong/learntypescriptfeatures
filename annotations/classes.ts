// Classes

// Blueprint to create and object with some fields
// (values) and methods (functions) to represent a 'thing

// Classes FIRST

// define a set of fields (values) and methods (functions)
//to represent a 'thing'

//SECONDLY they define a set of fields (values) and
// methodes (functions) to represent a 'thing'

// ALWAYS capitalize a name of a class

// class Vehicle {
//     constructor(public color: string) {
//     }
//     public drive(): void {
//         console.log('vroom vroom')
//     }

//     public name() {
        
//     } protected honk(): void {
//         console.log('beep')
//     }
// }

// const vehicle = new Vehicle('orange')
// console.log(vehicle.color)
// // vehicle.honk()

// class Car extends Vehicle {
//     constructor(public wheels: number, color: string){
//         super('color')
//     }

//     private drive(): void {
//         console.log('vroom')
//     }

//     startDrivingProcess(): void {
//         this.drive()
//         this.honk()
//     }
// }

// const car = new Car(4, 'color')
// car.startDrivingProcess()
// car.drive() // can't call method outside of class
// car.honk()

// const vehicle = new Vehicle ('purple') 
// vehicle.drive()
// vehicle.honk()

// **************************** //

// MODIFIERS

// can be public, private, and protected

// public method can be called any where, anytime

// private method can only be called by other methods
// in this class

// protected method can be called by other 
//methods in this class, or by other methods
//in child classes

// ***************

//FIELDS in classes & inheritance

//where to use classes 

// Interfaces + classes 

// is how we get really strong code reuse in TS

