// static 정적 프로퍼티, 메서드
// 인스턴스마다 변경될 데이터가 아닌 클래스레벨에서 공통적으로 사용할 수 있는 속성이나 함수에는 static 붙여줌
class Fruit {
    static MAX_FRUITS = 4;
    // 생성자: new 키워드로 객체를 생성할 떄 호출되는 함수
    constructor(name, emoji) {
    this.name = name; 
    this.emoji = emoji;
    };
    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스레벨의 메서드에서는 this를 참조할 수 없다(클래스 자체는 아무것도 채워져있지않은 템플릿이기때문)
        return new Fruit('banana', 'good');
    }
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
}
// apple(객체)은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', 'hi');
const orange = new Fruit('orange', 'hi');
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
console.log(apple);
console.log(orange);
console.log(orange.name);
orange.display();