// spread 연산자, 전개구문
// 모든 iterable은 spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4)

// Array concat
const fruits1 = ['apple', 'kiwi'];
const fruits2 = ['strawberry', 'banana'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, 'strawberry' ,...fruits2];
console.log(arr);

//object

const ellie = {name: 'Ellie', age: 20, home: { address: 'home'}}; // shallow copy
const updeate = {
    ...ellie,
    job: 's/w engineer'
};
console.log(ellie);
console.log(updeate);
