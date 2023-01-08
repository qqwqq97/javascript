function loop() {
    const array = [];
    // var과 let의 차이점!
    for (let i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func) => func());

// 코드의 실행순서 return 값같은거 생각해보기
// var은 블럭스코프가 없다 함수 스코프만 가지고 있음