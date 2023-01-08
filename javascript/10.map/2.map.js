// [key, value]
// key는 유일한 값, value는 중복가능
// 순서는 set처럼 상관없음

// const map = new Map();
const map = new Map([
    ['key1', 'apple'],
    ['key2', 'banana'],
]);
console.log(map)

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));
// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', 'kiwi');
console.log(map);
// 삭제
map.delete('key3');
console.log(map);
// 전체삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유'};
const obj = {
    [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
// 사용할 수 있는 함수가 다르다 map2.에서 사용할 수있는 함수(has, clear..)는 obj에서는 사용불가
console.log(obj[key]);
console.log(map2[key]); // map은 이렇게 key값에 접근하여 value구하지못함 get 사용
console.log(map2.get(key)); 