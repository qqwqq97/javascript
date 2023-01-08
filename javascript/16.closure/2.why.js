// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉 위해 쓰인다
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일
// 이제는 closure 사용하지 않고 클래스 사용하면 됨
function makeCounter() {
    let count = 0; // 은닉
    function increase() { // public함수만을 통해서 내부 데이터 조작
        count++;
        console.log(count);
    }
    return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
    #count = 0; // 내부적으로 사용하는 private 필드(외부에서는 접근 불가)
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter(); //instance만듦
counter.increase();
