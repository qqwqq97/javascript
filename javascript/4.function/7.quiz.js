// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5전달, 순회하는 숫자를 다 출력하고 싶음
// 최댓값 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

// function print(num) {
//     for(let i = 0; i <= num; i++){
//         console.log(i);
//     }
    
// }
// function two(num) {
//     for(let i = 0; i <= num; i++){
//         console.log(i * 2);
//     }
    
// }

// function iterate(max, action) {
//     const result = action(max);
//     console.log(result);
// }
// console.log(iterate(5, two));

////////////////////////////////////////////////////////////
function iterate(max, action) {
    for(let i = 0; i < max; i++) {
        action(i);
    }
}

function log(num) {
    console.log(num);
}

function doubleAndLog(num) {
    console.log(num * 2);
}
iterate(3, log);
iterate(3, doubleAndLog);
iterate(3, num => console.log(num * 2));

setTimeout(() => {
    console.log('1초뒤 실행')
}, 1000);


