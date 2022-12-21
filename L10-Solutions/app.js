// const double = (arr) => arr.map((val) => val * 2);

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
//* ES2015 Arrow Functions Shorthand
//* Refactor the above code to use two arrow functions. Turn it into a one-liner.
// const double = (arr) => arr.map((val) => val * 2);

//* Refactor the following function to use arrow functions:
//* Replace ALL functions with arrow functions:
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// const squareAndFindEvens = (numbers) =>
//   numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);

const max = function () {
  const args = Array.from(arguments);
  console.log(arguments);
  return args.reduce((maxNum, currentVal) => {
    return currentVal < maxNum ? currentVal : maxNum;
  });
};

//* Rest/Spread Operator Exercises

//* Given this Function - refractor it to use the rest operator & an arrow function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter((nums) => nums % 2 === 0);

// function filterOutOdds() {
//   const nums = [...arguments];
//   return nums.filter((num) => {
//     return num % 2 === 0;
//   });
// }

//* Find Min
//* Write a function called findMin that accepts a variable number of arguments and returns the
//*  smallest argument. Make sure to do this using the rest and spread operator.

const findMin = (...nums) =>
  nums.reduce((min, curVal) => (curVal < min ? curVal : min));

//* Merge Objects
//! Write a function called mergeObjects that accepts two objects and returns a
//! new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((num) => num * 2),
];

// function dblandreturn(array, ...args) {
//   return [
//     ...array,
//     ...args.map(function (v) {
//       return v * 2;
//     }),
//   ];
// }

// *Slice and Dice!
// *For this section, write the following functions using rest, spread and refactor
// *these functions to be arrow functions!
// *Make sure that you are always returning a new array or object and not modifying
// *the existing inputs.

// ** remove a random element in the items array
// and return a new array without that item. */

const removeRandom = (...items) => items.filter((v) => v % 2 === 0);

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}

const extend = (arr1, ...arr2) => [
  ...arr1,
  ...arr2.reduce((v, currVal) => v + currVal),
];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// const keyVal = (obj,key,val) => {...obj,[key]:val};
/** Return a new object with a key removed. */

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}
// const update = (obj, key, val) => {
//   let newObj = { ...obj };
//   newObj[key] = val;
//   return newObj;
// };

const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};
// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

const scumbag = {
  scum: [
    { source: "cow milk", value: "8.3/10" },
    { source: "rotten milk", value: "10/10" },
  ],
};

const values = ({
  scum: [
    { source: typeMilk, value: regMilk },
    { source: typeMilk2, value: badMilk },
  ],
} = scumbag);

//! Destructuring Exercise
//? Object 1 Destructure - What does the following code return/print?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //? {8}
// console.log(yearNeptuneDiscovered); // ? 1846

//? Object Destructure 2
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears);
//* {yearNeptune: 1846, yearMars: 1659}

//? Object Destructure 3 - what does the following code return/print
// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"})
//* 'your name is Alejandro, fav color purple
// getUserData({firstName: "Melissa"})
//* Your name is Melissa and you like green
// getUserData({})
//* your name is undefined and you like green

//? Array Destructuring 1 - what does the following code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first);
//? Maya
// console.log(second);
//? Marisa
// console.log(third);
//? Chi

//? Array Destructuring 2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings",
// ];
//* console.log(raindrops); // 'raindrops on roses'
//* console.log(whiskers); // 'whiskers on kittens'
//* console.log(aFewOfMyFavoriteThings);
//* ['bright copper kettles',warm woolen mittens','brown paper']

//? Array Destructure 3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

//* console.log(numbers) // [20,10,30]

//* ES5 Assigning Variables to Object Properties

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
//* rewrite below to access values
const { a, b } = obj.numbers;

//? Array Swap
let arr = [1, 2];
// const temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
//* rewrite below
[arr[0], arr[1]] = [arr[1], arr[0]];

//* raceResults()
//? Write a function called raceResults which accepts a single array argument.
//? it should return an object with the keys first, second, third & rest.

// function raceResults([first, second, third, ...rest]) {
//   return { first, second, third, rest };
// }

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

//! Maps & Sets
const myMap = new Map();
myMap.set(7, "seven");
myMap.set("7", "seven string");
// myMap.set(empty, "empty array!");
myMap.set(true, "trueee!");

const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// new set();

const bannedHashTags = new Set([
  "no filter",
  "jajaja",
  "justsying",
  "winning",
  "yolo",
]);

function filterHashTags(tags) {
  return tags.filter(function (val) {
    return !bannedHashTags.has(val);
  });
}

const susansTags = ["happymonday", "yolo", "winning", "sunset"];

// const hasDuplicate = (array) => array.filter((val) => )

function hasDuplicate(array) {
  return new Set(array).size !== array.length;
}

//* vowelCount

function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerChar = char.toLowerCase();
    if (isVowel(lowerChar)) {
      if (vowelMap.has(lowerChar)) {
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
      } else {
        vowelMap.set(lowerChar, 1);
      }
    }
  }
  return vowelMap;
}
