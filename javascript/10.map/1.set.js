// Set
// 중복불가, 순서 상관없음
// const set = new Set(); // 빈 집합생성
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach(item => console.log(item));
for(const value of set.values()){
    console.log(value)
}

// 추가  중복일 경우 추가되지 않음
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: 'apple', price: 8 };
const obj2 = { name: 'banana', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈 오브젝트는 shallow copy
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: 'banana', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs)

