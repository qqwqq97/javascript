// 접근 제어자 (외부에서 변경불가) - 캡슐화
// private(#):클래스 내부에서는 사용가능 외부에서는 사용x, public(기본), protected
class Fruit {
    // field 
    #name; // constructor에서 주어진 데이터는 생략가능
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
    this.#name = name; 
    this.#emoji = emoji;
    }
    #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`)
    };
}
// apple(객체)은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', 'hi');
//apple.#name = '오렌지'; //#field는 외부에서 접근이 불가능
console.log(apple);
// apple.display();
