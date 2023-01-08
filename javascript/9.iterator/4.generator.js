// [Symbol.iterator](): Iterator{ next(): {value, done}}; 
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, ... ,9
// 0, 2, 4, ... ,18

// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10;
//         let num = 0;
//         return {
//             next() {
//                 return { value: num++ * 2, done: num > max }
//             }
//         }
//     }
// }
// for(const num of multiple) {
//     console.log(num);
// }

// function* multipleGenerator() {
//     for(let i = 0; i < 10; i++) {
//         console.log(i);
//         yield i ** 2; //사용자가 next 호출할때까지 기다렸다가 사용자가 호출해야지 그 다음 코드 순회
//     }
// }

function* multipleGenerator() {
    try {
        for(let i = 0; i < 10; i++) {
            console.log(i);
            yield i ** 2; //사용자가 next 호출할때까지 기다렸다가 사용자가 호출해야지 그 다음 코드 순회
        }
    } catch (error) {
        console.log(error)
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
// multiple.return(); // generator 끝남
multiple.throw('Error!'); // 내부로 error던질수있음
next = multiple.next();
console.log(next.value, next.done);
