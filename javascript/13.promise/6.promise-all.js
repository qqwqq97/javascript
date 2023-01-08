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
getBanana()
.then((banana) => // .then((banana) => getApple()).then - 이렇게 하면 apple만 가져오게되서x 
    getApple() 
    .then((apple) => {
        return [banana, apple]
    })
    ).then(console.log); // 4초후 실행됨

// promise.all 병렬적으로 한번에 모든 promise들을 실행
Promise.all([getBanana(), getApple()]) //실행하고싶은 promise를 배열로 전달, 병렬적으로 동시에 실행
.then(fruits => console.log('all', fruits)) // 3초 후 실행됨

// Promise.race 주어진 프로미스 중에 제일 빨리 수행되는 것이 이김
Promise.race([getBanana(), getApple()])
.then(fruit => console.log('race', fruit));


Promise.all([getBanana(), getApple(), getOrange()]) 
.then((fruits) => console.log('all-error', fruits)) 
.catch(console.log)

// 에러가 발생한거랑 성공한거랑 정보받아오고싶다
Promise.allSettled([getBanana(), getApple(), getOrange()]) 
.then((fruits) => console.log('all-settle', fruits)) 
.catch(console.log)