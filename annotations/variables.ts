let apples: number = 5;

 let speed: string = "fast";

 let hasName: boolean = true;

 let nothingMuch: null = null;

 let nothing: undefined = undefined;

 //built in objects
 let now: Date = new Date();

 //array 
 let colors: string[] = ['red', 'green', 'blue'];
 let myNumbers: number[] = [1, 2, 3]
 let truths: boolean[] = [true, true, false]

 //Classes
 class Car {
      
 }

 let car: Car = new Car()

 //Object literal
 let point: { x: number; y: number } = {  
     x: 10,
     y: 20
 }

 //Function
 const logNumber:(i: number) => void  = (i: number) => {
    console.log(i)
 }


 //Type inference TypeScript guesses the type

 //Type annontations developers tell Typescript the type


//When to use annotations
// 1) Function that returns the 'any' type 


const json = "{'x': 10, 'y':20}"
const coordinates: { x: number; y: number }  = JSON.parse(json)
// add type annotation for coordinates 
console.log(coordinates) // {x:10, y:20}

// 2) when we declare a variable on one line
// and initalizate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly


let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false
// the "pipe" |  is an OR statement 
//numberAboveZero is a boolean OR a number

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}

//Type annotations for functions:
// Code we add to tell Typescript what type of arguments a function
// will receive and what type of values it will return

//Type inferene for functions:
//Typescript tries to figure out what type of value 
//a function will return










 



