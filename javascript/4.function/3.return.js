// return을 명시적으로 하지 않으면 자동으로 undefined이 변환됨
function add(a, b) {
    //return a + b;
    return undefined;
}

const result = add(1, 3);
console.log(result);

// return을 함수 중간에 하개 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num) {
    if (num < 0 ) {
        return; //return undefined; return 이용하면 도입부분에서 원하는 조건 아닐때 일찍 함수 종료
    }
    console.log(num);
}
print(12);
print(-12);