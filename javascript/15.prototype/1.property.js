// 모든 객체는 내부에 숨겨진 prototype을 갖고 있음
const dog = { name: '와우', emoji: 'dog' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog );
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
    value: '멍멍',
    writable: false, // 프로퍼티 값 수정(업데이트)
    enumerable: false, // 값을 열거
    configurable: false, // 키자체를 수정, 삭제(업데이트)
});

console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.values(dog));

delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
    firstName: {
        value: '영희',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: '김',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get() {
            return `${this.lastName} ${this.firstName}`;
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
    },
});
console.log(student);
console.log(student.fullName);
