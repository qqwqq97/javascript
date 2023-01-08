// const dog1 = { name: '뭉치', emoji: 'dog1'};
// const dog2 = { name: '코코', emoji: 'dog2'};
// 생성자 함수
function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수 - 메모리 낭비
    // this.printName = () => {
    //     console.log(`${this.name} ${this.emoji}`);
    // }
    // 프로토타입 레벨의 함수
    Dog.prototype.printName = function() {
        console.log(`${this.name} ${this.emoji}`);
    }
}
const dog1 = new Dog('뭉치', 'dog1');
const dog2 = new Dog('코코', 'dog2');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function() {
    console.log('안녕!');
}
dog1.printName();

 // 정적 레벨(인스턴스가 아니라 클래스이름/생성자함수이름에서만 접근가능)
Dog.hello = () => {
    console.log('Hello');
};
Dog.hello();
Dog.MAX_AGE = 20;
// dog1.hello();