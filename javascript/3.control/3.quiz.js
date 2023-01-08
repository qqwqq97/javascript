let num = 3;
// num의 숫자가 짝수이면 thumbs up, 홀수라면 thumbs down
// if
if (num % 2 === 0) {
    console.log('thumbs up');
} else {
    console.log('thumbs down');
}

// ternary
let emoji = num % 2 === 0 ? 'thumbs up' : 'thumbs down';
console.log(emoji);