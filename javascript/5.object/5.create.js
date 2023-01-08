// const apple = {
//     name: 'apple',
//     dsiplay: function() { //객체안에서 자기자신의 속성에 접근할떄는 항상 this붙여줌
//         console.log(`${this.name}: 입니다`)
//     } 
// };

// const orange = {
//     name: 'orange',
//     dsiplay: function() { //객체안에서 자기자신의 속성에 접근할떄는 항상 this붙여줌
//         console.log(`${this.name}: 입니다`)
//     } 
// };

// 생성자 함수(대문자로 시작하면 생성자함수 )
function Fruit(name, emoji) {//생성자함수를 호출하면 특정한 객체가 만들어지도록함
    this.name = name; //이객체의 name(key) = 전달받은 name
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
    //return this; //생략가능
}

const apple = new Fruit('apple', 'hi');
const orange = new Fruit('orange', 'hi');

console.log(apple);
console.log(orange);
console.log(orange.name);
orange.display();
