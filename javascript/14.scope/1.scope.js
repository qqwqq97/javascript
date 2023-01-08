// scope: 변수를 참조할 수 있는(접근할 수 있는) 유효한 범위
// 식별자(변수, 함수, 클래스 이름)가 유효한 범위
// 선언된 위치에 따라 유효 범위가 결정됨
// { 블록 안의 변수는 블럭 안에서만 유효 }
// 이름 충돌 방지, 메모리 절약 
// 코드 블럭: { }, if() { }, for() { }, function() {} switch
// 블록 외부에서는 블럭 내부의 변수를 참조할 수 없음
{
    const a = 'a';
    console.log(a);
}
const b = 'b';
// console.log(a);

// 함수 외부에서는 함수 내부의 변수 참조 못함
function print() {
    const message = 'Hello World'; // 함수 내부에서 쓰이는 지역변수(로컬변수)
    console.log(message);
}
// console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 할 수 없음
function sum(a, b) {
    console.log(a, b);
}
// console.log(a, b);


