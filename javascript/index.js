function sum(a, b) {
    console.log(arguments);
};
sum(1, 2);

const add = (a, b) => {
    console.log(arguments);
};

add(1, 2);

const cat = {
    name: 'cat',
    play() { // 객체의 메서드(오브젝트에 속한 함수)
        console.log('냐옹');
    },
};

const printArrow = () => {
    console.log(this);
};
printArrow();

cat.printArrow = printArrow;
console.log(cat);
cat.printArrow();






















