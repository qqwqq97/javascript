// 옵셔널 체이닝 연산자 optional chaining operator
// ES11
// ?.
// null 또는 undefined인 경우를 확인할 떄
let item = { price: 1 };
const price = item?.price;
console.log(price);


let obj = { name: 'dog', owner: {name: '앨리'} };
function printName(obj) {
    const ownerName = obj?.owner?.name;
    console.log(ownerName);    
}
printName(obj);

