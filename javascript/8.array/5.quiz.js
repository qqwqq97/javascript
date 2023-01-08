// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록
// input: ['banana', 'strawberry', 'orange', 'strawberry']
// output: ['banana', 'kiwi', 'orange', 'kiwi']
{
    const arr1 = ['banana', 'strawberry', 'orange', 'strawberry'];
    
    function replace(arr) {
        let arr2 = Array.from(arr);
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i] === 'strawberry') {
                arr2[i] = 'kiwi'
            }
        }
        console.log(arr2);
    }
    replace(arr1);
    }
// 강의에서 푼 방식
function replace(array, from, to) {
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++) {
        if(replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}
const array =  ['banana', 'strawberry', 'orange', 'strawberry'];
const result = replace(array, 'strawberry', 'kiwi');
console.log(result);
// 퀴즈2: 
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: ['banana', 'kiwi', 'orange', 'kiwi'], 'kiwi'
// output: 2
{
    const arr1 = ['banana', 'kiwi', 'orange', 'kiwi'];
    function countFruit (arr) {
        count = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 'kiwi') {
                count++;
            }
        }
        console.log(count);
    }
    countFruit(arr1);
    }
// 강의에서 푼 것
function count(array, item) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            counter++;
        }
    }
    return counter;
}

console.log(count(['banana', 'kiwi', 'orange', 'kiwi'], 'kiwi'))
// 퀴즈3: 배열1, 배열2 두 개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['banana', 'kiwi', 'grape'], ['banana', 'strawberry', 'grape', 'strawberry']
// output: ['banana', 'grape']
{
    const arr1 = ['banana', 'kiwi', 'grape'];
    const arr2 = ['banana', 'strawberry', 'grape', 'strawberry']
    const arr3 = []; 
    function returnArray(arr, arr2) {   
        for(i = 0; i < arr.length; i++) {
            for(j = 0; j < arr2.length; j++) {
                if(arr[i] === arr2[j]) {
                    arr3.push(arr[i]);
                }
            }
        }
        return arr3;
    }
    
    const newArr = returnArray(arr1, arr2);
    console.log(newArr);
    }
    
// 강의에서 푼 것
function match(input, search) {
    const result = [];
    for(let i = 0; i < input.length; i++) {
        if(search.includes(input[i])){
            result.push(input[i]);
        }
    }
    return result;
}
console.log(match(['banana', 'kiwi', 'grape'],['banana', 'strawberry', 'grape', 'strawberry']));

