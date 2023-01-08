// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

'use strict';
// var x = 1;
// delete x;

function add(x) {
    var a = 2;
    // b = a + x; // 엄격모드에서는 변수선언을 꼭 해줘야함 
    var b = a + x;
    console.log(this); //undefined(엄격모드에서 출력할 경우)
}
add(1);
// let 이나 const 사용하여 변수선언해줘야함
const array = [1, 2, 3];
for(num of array) {
    console.log(num);
}
