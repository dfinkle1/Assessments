//*?  For Each
//? Write a function called doubleValues which accepts an array and returns a new array
//? with all the values in the array passed to the function doubled

function doubleValues(array) {
  array.forEach(function (value) {
    console.log(value ** 2);
  });
}

//? Write a function called onlyEvenValues which accepts an array and returns
//? a new array with only the even values in the array passed to the function

function onlyEvenValues(array) {
  array.forEach(function (value, i) {
    if (value % 2 === 0) console.log(value);
  });
}

//* Write a function called showFirstAndLast which accepts an array of strings
//* & returns a new array with only the first and last character of each string
//* we used slice here to get the last character of each string

const names = ["johnsilver", "crocman420", "applesaucejohn", "sniperchriskyle"];
function showFirstAndLast(array) {
  array.forEach(function (value, index, array) {
    console.log(value[0], value.slice(-1));
  });
}

//* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value
//* and returns the array passed to the function with the new key and value added for each object

// const things =
//   ([{ name: "Ellie" }, { name: "Tim" }, { name: "Matt" }, { name: "Avital" }],
//   "title",
//   "instructor");

function addKeyAndValue(array, key, value) {
  array.forEach(function (val) {
    val[key] = value;
  });
  return array;
}

function vowelCount(str) {
  const vowels = "aeiou";
  let splitArr = str.split("");
  let obj = {};
  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

//** map */

function doubleValuesWithMap(array) {
  return array.map(function (value) {
    return value * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (value, index, array) {
    return value * index;
  });
}

function extractKey(arr, key) {
  return arr.map(function (value, index, array) {
    return value.name;
  });
}

function extractFullName(array) {
  return array.map(function (value, index, array) {
    return `${value.first} ${value.last}`;
  });
}

//* Filter

function filterByValue(array, key) {
  return array.filter(function (value, index, array) {
    return value[key] !== undefined;
  });
}

function find(array, searchValue) {
  return array.filter(function (value, key, array) {
    return value === searchValue;
  })[0];
}

function findInObj(array, key, searchValue) {
  return array.filter(function (val, index) {
    return val[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(nums) {
  return nums
    .filter(function (val, array) {
      return val % 2 !== 0;
    })
    .map(function (val) {
      return val * 2;
    });
}

//* Write a function called hasOddNumber which accepts an array and returns true if the array contains
//* at least one odd number, otherwise it returns false.

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

//* Write a function called hasAZero which accepts a number and returns true if that number contains at
//* least one zero. Otherwise, the function should return false

function hasAZero(nums) {
  const num = Array.from(String(nums));
  return num.some(function (val) {
    return val === "0";
  });
}

//*Write a function called hasOnlyOddNumbers which accepts an array and returns true if every
//*single number in the array is odd. If any of the values in the array are not odd,
//*the function should return false.

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}

//* Write a function called hasNoDuplicates which accepts an array and returns true if there are
//* no duplicate values (more than one element in the array that has the same value as another).
//* If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

//*Write a function called hasCertainKey which accepts an array of objects and a key, and returns
//*true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(arr, key) {
  return arr.every(function (val, index, array) {
    return val[key];
  });
}

// Write a function called hasCertainValue which accepts an array of objects and a key,
// and a value, and returns true if every single object in the array contains that value
// for the specific key. Otherwise it should return false.

// let arr = [
//   { title: "Instructor", first: "Elie", last: "Schoppik" },
//   { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
//   { title: "Instructor", first: "Matt", last: "Lane" },
//   { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
// ];

function hasCertainValue(arr, key, value) {
  return arr.every(function (val) {
    return val[key] === value;
  });
}

//* each with a key of username, and a string. The function should return the first object
//* with the key of username that matches the string passed to the function. If the object is
//* Write a function called findUserByUsername which accepts an array of objects,
//* not found, return undefined.

const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserByUsername(arr, username) {
  return arr.find(function (val) {
    return val.username === username;
  });
}

//write a function called removeUser which accepts an array of objects, each with a key of username,
// and a String. The function should remove the object from the array and return this object. If the
// object is not found, return undefined.

function removeUser(arr, user) {
  let foundIndex = arr.findIndex(function (val) {
    return val.username === user;
  });
  if (foundIndex === -1) return;
  return arr.splice(foundIndex, 1)[0];
}

const midtermScores = [70, 88, 93, 94, 64, 62, 59];
// const minScore = midtermScores.reduce(function (min, nextScore) {
//   console.log(min, nextScore);
//   if (nextScore < min) {
//     return nextScore;
//   }
//   return min;
// });

const minScore = midtermScores.reduce(function (min, nextScore) {
  return nextScore < min ? nextScore : min;
});

//* Write a function called extractValue which accepts an array of objects and a key and
//* returns a new array with the value of each object at the key.
const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function extractValue(array, key) {
  return array.reduce(function (accum, nextValue) {
    accum.push(nextValue[key]);
    return accum;
  }, []);
}

//* Write a function called vowelCount which accepts a string and returns an object
//* with the keys as the vowel and the values as the number of times the vowel appears in the string.
//* This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
  // let string = Array.from(str);
  const vowels = "aeiou";
  let letters = {};
  return str.split("").reduce(function (acc, next) {
    let lowerCased = next.toLowerCase();
    if (vowels.indexOf(lowerCased) !== -1) {
      if (acc[lowerCased]) {
        acc[lowerCased]++;
      } else {
        acc[lowerCased] = 1;
      }
    }
    // console.log(false);
    return acc;
  }, {});
}

function vowelCnt(str) {
  let vowel = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce(function (acc, next) {
      if (vowel.indexOf(next) !== -1) {
        if (acc[next]) {
          acc[next]++;
        } else {
          acc[next] = 1;
        }
      }
      return acc;
    }, {});
}

//* Write a function called addKeyAndValue which accepts an array of objects and returns
//* the array of objects passed to it with each object now including the key and value passed
//* to the function.

function addKeyAndValue(array, key, value) {
  return array.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

function isEven(val) {
  return val % 2 === 0;
}

const arrs = [1, 2, 3, 4, 5, 6, 7, 8];

partition(arr, isEven); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

const naames = ["Elie", "Colt", "Tim", "Matt"];

function partition(array, cb) {
  return array.reduce(
    function (acc, next, idx) {
      if (cb(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}

// function partition(arr, cb) {
//   return arr.reduce(
//     function (acc, next) {
//       if (cb(next)) {
//         acc[0].push(next);
//       } else {
//         acc[1].push(next);
//       }
//       return acc;
//     },
//     [[], []]
//   );
// }
