//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다
// 상태변경이 필요한 경우에는 새로운 상태를(오브젝트, 값)만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5;
    console.log(num);
}
const value = 4;
display(value);
console.log(value);


function displayObj(obj) {
    obj.name = 'bob'; // XXXXXXXXXXXXXXXXXXXXXX 외부로부터 주어진 인자(특히 오브젝트)를 내부에서 변경X
    console.log(obj);
}
//함수 내부에서 무언가를 바꿔야할 경우
function changeName(obj) { //이름부터 변경하는 느낌주도록
    return {...obj, name: 'bob'}; //기존 obj유지 반환할때는 새로운 오브젝트 만들기
}



const ellie = {name: 'ellie'};
displayObj(ellie);
console.log(ellie);

