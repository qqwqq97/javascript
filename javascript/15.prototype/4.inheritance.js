// 프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
    // super(name, emoji)
    Animal.call(this, name, emoji) //부모생성자에 연결 //부모생성자에서필요한것 전달
    this.owner = owner; // dog에만 필요한것
}
// Dog.prototype = Object.create(Object.prototype)
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.play = () => {
    console.log('같이 놀자옹')
}

function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log('사냥하자');
}
const dog1 = new Dog('멍멍', 'dog', '엘리');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', 'tiger');
tiger1.printName();
tiger1.hunt();
// 누구의 instance인지 확인 어떤 클래스/생성자함수를 사용하는지 어떤 프로토타입 상속하는지 확인
console.log(dog1 instanceof Dog); 
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog); 
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);