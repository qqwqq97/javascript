// 산술 연산자(Arithmetic operation)
// +
// -
// *
// /
// %
// ** 지수 (거든제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); //es7에 추가
console.log(Math.pow(5, 2)); //예전 거든제곱방식


// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환
console.log(text);

