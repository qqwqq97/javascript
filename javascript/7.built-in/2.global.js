//node - this: 현재 모듈에 있는 정보 this와 globalThis는 전역객체을 가리킴
//브라우저 - this: window window가 전역객체
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
// 자바스크립트를 한줄한줄 표현할 수 있는 함수 
// 문자열 형태로 코드 작성하면 값으로 평가해서 출력
eval('const num = 2; console.log(num)'); //2
// 숫자가 유한한지 아닌지 확인
console.log(isFinite(1));
console.log(isFinite(Infinity));
// 문자열인데 실수면 숫자로 변환
console.log(parseFloat('12.44'));
// 문자열안에 숫자를 정수로 변횐
console.log(parseInt('12.444'));
console.log(parseInt('12'));
// URL ( URI, Uniform Resource Identifier 하위개념 )
// 아스키 문자로만 구성되야 함
// 한글, 특수문자는 이스케이프 처리 해야한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 이스케이프 처리한걸 원래 한글이나 특수문자로 변환하고 싶을떄
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL 아니라 부분적인 것은 Complnent이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));


