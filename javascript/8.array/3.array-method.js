// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['banana', 'apple', 'lemon'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('apple'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('apple'));

// 추가 - 제일 뒤
let length = fruits.push('peach'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);
// 추가 - 제일 앞
length = fruits.unshift('strawberry'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 제거된 아이템 리턴, 배열자체를 수정
console.log(fruits);
console.log(lastItem);
// 제거 - 제일 앞
lastItem = fruits.shift(); // 제거된 아이템 리턴, 배열자체를 수정
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트), 삭제된 아이템 반환
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, 'apple', 'strawberry');
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); //끝나는 인덱스-1, 기존배열유지
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(); // 배열 전체 반환
console.log(newArr);

newArr = fruits.slice(1); 
console.log(newArr);

newArr = fruits.slice(-2); 
console.log(newArr);

// 여러개의 배열을 붙여줌 , 새로운 배열 만든다
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2)); //flat:기존배열수정안하고 새로운배열리턴
arr = arr.flat(2);

// 특정한 값으로 배열을 채우기
// fill - 배열 자체를 수정
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); // end인덱스는 포함하지 않음
console.log(arr);

arr.fill('a', 1); 
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);











