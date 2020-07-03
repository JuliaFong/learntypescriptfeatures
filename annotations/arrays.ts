// Type Arrays
// In Typescript you're essentially working with plain JS
// Arrays where each element is some consistent type of value

const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//OR
 const carMakes: string[] = [];
 const carsByMakers: string[][] = [];

 //Typed Arrays

 //Arrays where each element is some consistent type of value

 //TS can do type inferenec when extracting values from an array

 //TS can prevent us from adding compatible values to the array

 //We can get help with 'map', 'forEach', 'reduce' functions

 //Flexible - arrays can still contain multiple different types


 //This helps with inference when extracting values
 const car = carMakers[0];
 const myCar = carMakers.pop();

 //prevent incompatible values
//such as this example carMakers.push(100); 

 //Help with 'map'

 carMakers.map((car: string): string => {
    return car;
 });

 //Flexible types

 const importantDates = [new Date(), '2030-10-10']
 importantDates.push('2050-10-10')
 importantDates.push(new Date())
//OR

const importantDate: (Date | string)[] = [new Date()];
importantDate.push('2020-12-12')
importantDate.push(new Date());

//Where to use typed arrays??

//Anytime we need to represent a collection of records with some
//arbitrary sort order


