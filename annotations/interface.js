"use strict";
//Interfaces: 
// Creates a new type describing the property names
// and value types of an object
// A custom type the developer will design
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken:  " + vehicle.broken);
};
printVehicle(oldCivic);
var olderCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var drinks = {
    color: 'brown',
    cabornated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    // console.log(`Name ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken:  ${vehicle.broken}`)
    console.log(item.summary());
};
printSummary(olderCivic);
printSummary(drinks);
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
