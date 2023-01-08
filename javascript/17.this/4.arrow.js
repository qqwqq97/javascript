// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스 대체)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
    name: 'Dog',
    play: () => { // 생성자 함수처럼 사용불가
        // xx
        console.log('논다멍');
    },
    // play: function () { // 생성자함수처럼 쓸수있음
    //     // xx
    //     console.log('논다멍');
    // },
};
dog.play();
const obj = new dog.play(); // xx
console.log(obj);

// ES6
const cat = {
    name: 'cat',
    play() { // 객체의 메서드(오브젝트에 속한 함수)
        console.log('냐옹');
    },
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용x

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가(무거운 프로토타입을 만들지 x)
 * 3. 함수 자체 arguments(객체) 가지고있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
    console.log(arguments); // 전달된 인자에 대한 정보
}
sum(1, 2)

const add = (a, b) => {
    console.log(arguments); // 전역객체의 argument출력
                            // arrow 함수 외부의 arguments를 찹조함
};
add(1, 2);

const printArrow = () => {
    console.log(this); // 전역/ globalThis인 module정보 출력
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
