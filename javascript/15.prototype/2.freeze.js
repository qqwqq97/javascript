// 동결 Object.freeze 새 프로퍼티 추가 x, 삭제 x, 쓰기 x, 속성 재정의 x(defindeproperty이용하여 수정할수있다없다 변경할수없음)
// (단, 얕은 꽁꽁얼림)
// 동결된 객체 수정할 수 없음
const ellie = { name :'ellie' };
const dog = { name: '와우', emoji: 'dog', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

ellie.name = '앨리얌';
console.log(dog);

// 밀봉 Object.seal 값의 수정 O, 추가 x, 삭제 x, 속성 재정의 x
const cat = {...dog };
// Object.assign(cat, dog); // 객체 복사해올수있음
console.log(cat);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가x
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);

