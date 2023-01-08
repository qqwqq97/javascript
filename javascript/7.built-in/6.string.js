const textObj = new String('Hello');
const text = 'Hello World';
console.log(text);
console.log(textObj);

console.log(text[0]);
console.log(text.length);
console.log(text.charAt(0));
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));
console.log(text.includes('h'));
console.log(text.includes('tx'));
console.log(text.startsWith('H'));
console.log(text.endsWith('d'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));
const space = '         space               ';
console.log(space.trim()); //공백제거

const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
console.log(longText.split(',', 2));