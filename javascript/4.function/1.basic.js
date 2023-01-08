// 사용예제1
function add(a, b) {
    return a + b;
}

const result = add(5, 4);
console.log(result);

// 사용예제2
let lastName = '김';
let firstName = '지수';
//let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

function fullName(firstName, lastName) {
    return `${lastName} ${firstName}`;
}
console.log(fullName(firstName, lastName));