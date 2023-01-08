// 자바스크립트 파일별로 캡슐화 - 모듈
let count = 0;
// export default function increase() {
//     count++;
//     console.log(count);
// }

export function increase() {
        count++;
        console.log(count);
    }
export function getCount() {
    return count;
}    