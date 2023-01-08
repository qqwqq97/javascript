const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);
// 클래스 레벨에서 쓸수있는 프로퍼티 (객체만들지않고)
// 정수에서 쓸수있는 가장 큰 값
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// 안전하게 사용할 수 있는 최대값 최소값
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// 숫자가 아닌것
console.log(Number.NaN);
//무한 - + 값
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(num1 === Number.NaN) {

}
if(Number.isNaN(num1)){
    console.log('ff');
} else {
    console.log('gg');
}
if(num1 < Number.MAX_VALUE) {

}

// 지수표기법 (매우 크거나 작은 숫자들 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // e+2 10의 2승

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 숫자를 문자열로 변환
console.log(num4.toString());
// 나라에 맞는 숫자 표기
console.log(num4.toLocaleString('ar-EG')); //아랍
// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //전체 자릿수 표기가 안될때는 지수표기법으로 반환

console.log(Number.EPSILON); //0과 1사이에서 나타낼수있는 가장작은숫자
if(Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}
// 10진수를 2진수로 각각 변환해서 계산 2진수를 다시 10진수로 변환 - 정확하게 부동소수점까지 계산되지않는다
const num = 0.1 + 0.2 -0.2; // 0.1?
console.log(num);
// 실수끼리 계산할때 정말작은 미세한 차이가 발생할수있음 이때 감지하려면 Epsilon 사용하면됨
// 작은 미세한 차이 간주하고 싶지 않다면(미세한 차이라면 같다고 간주하고 싶으면)
// function isEqual(original, expected) {
//     return original === expected;
// }

function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); 

