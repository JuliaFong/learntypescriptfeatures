//Tuple:

// An array-like structure where each element
// represents some property of a record
//tuples have a VERY specific order to them

// Tuples aren't often use

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

//Tuple
const coke: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0]

const carSpecs: [number, number] = [400, 3354]

const carStats = {
    horserpower: 400,
    weight: 3354
};
