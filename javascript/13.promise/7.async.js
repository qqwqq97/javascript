// 비동기적인 코드를 동기적으로 보이게

function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('banana');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('apple');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() { // 비동기함수 함수 호출하면 promise가 리턴 // 함수 내부에서는 조금 더 동기적인 코드 작성가능
    const banana = await getBanana(); // banana 받아올 때 까지 기다렸다가 받아온 바나나를 변수에 할당
    const apple = await getApple();
    return [banana, apple]
}

fetchFruits()
.then(fruits => console.log(fruits))
 

