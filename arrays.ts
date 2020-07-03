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
