// 'use strict'
/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */
console.log(this);  // {} this란 module을 가리킴 
const x = 0; // 모듈에 어떤것을 export하면 그 오브젝트가 출력
module.exports.x = x;
console.log(this); 
console.log(globalThis); // 글로벌 객체를 가리킴
// globalThis.setTimeout()
// setTimeout() // globalThis는 생략이 가능하다

// 브라우저에서 globalThis, this는 window객체
console.clear()
/**
 * 함수 내부에서의 this
 *  엄격모드에서는 undefined
 *  느슨한 모드에서는 globalThis
*/

function fun() {
    console.log(this); // 함수 내부에서 this에 접근하면 globalThis가 촐력
}
fun(); 
// 브라우저에서는 window가 출력

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();