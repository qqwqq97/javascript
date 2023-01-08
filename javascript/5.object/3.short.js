const x = 0;
const y = 0;
// const coordinate = {x: x, y: y}; // key이름과 참조하는 변수이름동일한경우 간략하게 만들수있따
const coordinate = { x, y }; 
console.log(coordinate);

function makeObj(name, age) {
    return {
        name,
        age,
    };
}