/* Is this testable / readable? */
// var total = 0,
//     count = 0;

// for (var i = 10; i < 21; i++) {
//     if (i % 2 === 0) {
//         total += Math.pow(i, 2);
//         count++;
//     }
// }

// var average = total / count;
// console.log('average: ', average);

// var polyfillRange = function (arr) {
//     if (Array.isArray(arr)) {
//         for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
//             arr2[i] = arr[i];
//         }
//         return arr2;
//     }
//     else {
//         return Array.from(arr);
//     }
// };



/* Is this testable / readable? ES5 version*/
// var range = function range(start, end) {
//     return [].concat(polyfillRange(Array(end - start + 1))).map(function (_, i) {
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
//     return nums.reduce(function (total, num) {
//         return total + num;
//     });
// };
// var length = function length(nums) {
//     return nums.length;
// };
// var average = function average(nums) {
//     return sum(nums) / length(nums);
// };
// var result = average(range(10, 20).filter(isEven).map(square));

// console.log('average: ', result);


/* Is this testable / readable? ES6 version*/
let range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
let isEven = n => n % 2 === 0;
let square = n => n ** 2;
let sum = nums => nums.reduce((total, num) => total + num);
let length = nums => nums.length;
let average = nums => sum(nums) / length(nums);
let result = average(range(10, 20).filter(isEven).map(square));

console.log('average: ', result);
