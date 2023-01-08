// 논리연산자 logical operator
// && 그리고 
// || 또는
// ! 부정
// !! 불리언값으로 변환

let num = 8;
if(num >= 0 || num < 9) {
    console.log('OK');
}
if (num != 8) {
    console.log('no');
}

console.log(true && true); //t
console.log(true && false); //f
console.log(false && true); //f
console.log(false && false); //f

console.log(true || true); //t
console.log(true || false); //t
console.log(false || true); //t
console.log(false || false); //f

console.log(!'text');
console.log(!!'text');