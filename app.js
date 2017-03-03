/* Is this testable / readable? */
// console.time('For-Loop-time-execution')
// var total = 0,
//     count = 0;

// for (var i = 10; i < 21; i++) {
//     if (i % 2 === 0) {
//         total += Math.pow(i, 2);
//         count++;
//     }
// }

// var average1 = total / count;
// console.log('average: ', average1);
// console.timeEnd('For-Loop-time-execution') //3.660ms





/* Is this testable / readable? ES5 version*/
// console.time('ES5-time-execution')
// var polyfillRange = function(arr) {
//     if (Array.isArray(arr)) {
//         for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
//             arr2[i] = arr[i];
//         }
//         return arr2;
//     } else {
//         return Array.from(arr);
//     }
// };
// var range = function range(start, end) {
//     return [].concat(polyfillRange(Array(end - start + 1))).map(function(_, i) {
//         return start + i;
//     });
// };
// var isEven = function isEven(n) {
//     return n % 2 === 0;
// };
// var square = function square(n) {
//     return Math.pow(n, 2);
// };
// var sum = function sum(nums) {
//     return nums.reduce(function(total, num) {
//         return total + num;
//     });
// };
// var length = function length(nums) {
//     return nums.length;
// };
// var average = function average(nums) {
//     return sum(nums) / length(nums);
// };
// var result1 = average(range(10, 20).filter(isEven).map(square));

// console.log('average: ', result1);
// console.timeEnd('ES5-time-execution') //5.030ms





/* Is this testable / readable? ES6 version*/
// console.time('ES6-time-execution')
// let range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
// let isEven = n => n % 2 === 0;
// let square = n => n ** 2;
// let sum = nums => nums.reduce((total, num) => total + num);
// let length = nums => nums.length;
// let average = nums => sum(nums) / length(nums);
// let result = average(range(10, 20).filter(isEven).map(square));

// console.log('average: ', result);
// console.timeEnd('ES6-time-execution') //4.751ms





/* Is this testable / readable? Ramda version*/
console.time('Ramda-time-execution');
const R = require('Ramda');
let range = R.range(10);
let isEven = n => n % 2 === 0;
let square = n => n ** 2;
let sum = nums => nums.reduce((total, num) => total + num);
let length = nums => nums.length;
let average = nums => sum(nums) / length(nums);
let chainedFun = R.pipe(range, R.filter(isEven), R.map(square), average);
let result = chainedFun(21)

console.log('average: ', result);
console.timeEnd('Ramda-time-execution') //285.282ms