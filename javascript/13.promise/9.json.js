// JSON: Javascript Object Notation
// 서버와 통신을 할 때 데이터를 주고 받을 수 있음
// 자바스크립트에서 사용하는 객체를 서버와 주고받기 편한 문자열 형태로 변환한 버전
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringfy(object): JSON //오브젝트 데이터를 서버에 보내기 전 제이슨(문자열)으로 변환한 후 서버에 보내고
// parse(JSON): object // 서버로부터 제이슨을 받을 때 객체로 변환

const ellie = {
    name: 'ellie',
    age: 20,
    eat: () => {
        console.log('eat');
    },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie); 
console.log(json); // 오브젝트를 제이슨으로 변환할 때 함수는 포함되지 않음, 객체의 데이터상태만 포함
// 역직렬화 Deserializing 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);