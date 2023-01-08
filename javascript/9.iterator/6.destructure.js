// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['apple', 'kiwi', 'strawberry', 'banana'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', 'sweet'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
// function display(person) {
//     console.log('이름', person.name);
//     console.log('나이', person.age);
//     console.log('직업', person.job);
// }
function display({name, age, job}) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}
display(ellie);
// 변수할당할때
const {name, age, job: occupation, pet = '강아지'} = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);


// Quiz

const prop = {
    name: 'Button',
    styles: {
    size: 20,
    color: 'black',
    },
};

function changeColor({styles: {color}}) {
    console.log(color);
}

changeColor(prop);  