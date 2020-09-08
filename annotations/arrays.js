"use strict";
// Type Arrays
// In Typescript you're essentially working with plain JS
// Arrays where each element is some consistent type of value
var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
//OR
var carMakes = [];
var carsByMakers = [];
//Typed Arrays
//Arrays where each element is some consistent type of value
//TS can do type inferenec when extracting values from an array
//TS can prevent us from adding compatible values to the array
//We can get help with 'map', 'forEach', 'reduce' functions
//Flexible - arrays can still contain multiple different types
//This helps with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
//prevent incompatible values
//such as this example carMakers.push(100); 
//Help with 'map'
carMakers.map(function (car) {
    return car;
});
//Flexible types
var importantDates = [new Date(), '2030-10-10'];
importantDates.push('2050-10-10');
importantDates.push(new Date());
//OR
var importantDate = [new Date()];
importantDate.push('2020-12-12');
importantDate.push(new Date());
//Where to use typed arrays??
//Anytime we need to represent a collection of records with some
//arbitrary sort order
