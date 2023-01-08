// 카운터를 만들기
// 0이상의 값으로 초기화한뒤 하나씩 숫자를 증가할수있는카운터를 만들기
// Counter 클래스 만들기

class Counter {
    #value;
    constructor(startValue) {
        if(isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }
    get value() {
        return this.#value;
    }
    increment = () => {
        this.#value++;
    }
}




const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value)

