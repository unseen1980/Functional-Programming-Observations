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

let range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
let isEven = n => n % 2 === 0;
let square = n => n ** 2;
let sum = nums => nums.reduce((total, num) => total + num);
let length = nums => nums.length;
let average = nums => sum(nums) / length(nums);
let result = average(range(10, 20).filter(isEven).map(square));

console.log('average: ', result);