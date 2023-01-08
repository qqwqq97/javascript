// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     play() {
//         console.log('놀자아아아')
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {

}

const tiger = new Tiger('pink');
console.log(tiger);
tiger.eat();

class Dog extends Animal {
    constructor(color, owner) {
        super(color); // 상속하고있는 부모 class - super, 부모생성자에 color 전달
        this.owner = owner;
    }
    play() {
        console.log('놀자');
    }
    // overriding 부모클래스의 함수를 덮어씌운다
    eat() {
        super.eat(); //부모기능유지하면서 추가적인것 하고싶을때
        console.log('강아지가 먹는다');
    }
}
const dog = new Dog('pink', 'ellie');
console.log(dog);
dog.eat();
dog.play();
