// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 화살표 함수 const name = () => { }
let add = function (a, b) {
    return a + b;
};

console.log(add(1, 5));

// add = (a, b) => {
//     return a + b;
// }

add = (a, b) => a + b;

console.log(add(1, 5));

// 생성자 함수 const Object = new Function; / 객체편에서

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
    console.log('happy');
})();