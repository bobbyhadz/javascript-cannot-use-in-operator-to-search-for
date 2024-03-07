// TypeError: Cannot use 'in' operator to search for 'X' in 'Y'

// EXAMPLE 1 - Checking if a key exists in an object

// ✅ correct usage of `in` operator
const obj = {
  id: 1,
  site: 'bobbyhadz.com',
};

console.log('site' in obj); // 👉️ true
console.log('abc' in obj); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if a substring is contained in a string

// // 👇️ true
// console.log('bobbyhadz.com'.includes('bobby'));

// // 👇️ false
// console.log('bobbyhadz.com'.includes('abc'));

// if ('bobbyhadz.com'.includes('bobby')) {
//   // 👇️ this runs
//   console.log('The substring is contained in the string');
// } else {
//   console.log('The substring is NOT contained in the string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if a substring is in a string ignoring the case

// // 👇️ true
// console.log(
//   'bobbyhadz.com'.toLowerCase().includes('bobby'.toLowerCase()),
// );

// // 👇️ false
// console.log(
//   'bobbyhadz.com'.toLowerCase().includes('abc'.toLowerCase()),
// );

// if (
//   'bobbyhadz.com'.toLowerCase().includes('bobby'.toLowerCase())
// ) {
//   // 👇️ This runs
//   console.log('The substring is contained in the string');
// } else {
//   console.log('The substring is NOT contained in the string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Use the JSON.parse() method to parse JSON strings to native JS Objects

// const myJSON = '{"id": 1, "site": "bobbyhadz.com"}';

// const obj = JSON.parse(myJSON);
// console.log(typeof obj); // 👉️ object

// console.log('site' in obj); // 👉️ true
// console.log('abc' in obj); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - The value to the right of the `in` operator cannot be `null` or `undefined`

// const obj = null;

// console.log('bobby' in (obj || {})); // 👉️ false

// const obj2 = undefined;

// console.log('bobby' in (obj2 || {})); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 6 - Checking if the variable is an object before using the `in` operator

// function isObject(value) {
//   return (
//     typeof value === 'object' &&
//     value !== null &&
//     !Array.isArray(value)
//   );
// }

// const obj = {id: 1, site: 'bobbyhadz.com'};

// if (isObject(obj)) {
//   // 👇️ this runs
//   console.log('site' in obj); // 👉️ true
// } else {
//   console.log('The value is NOT an object');
// }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Using the `in` operator with an array

// const arr = ['bobby', 'hadz', 'com'];

// console.log(1 in arr); // 👉️ true

// console.log('bobby' in arr); // 👉️ false
