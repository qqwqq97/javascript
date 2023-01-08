function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => eggfry`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가지고 올 수 없음'))
    // return Promise.resolve(`grass => chicken`)
}

// fetchEgg('chicken') 
// .then(egg => console.log(egg));

// getChicken()
// .then(chicken => {return fetchEgg(chicken);})
// .then(egg => fryEgg(egg))
// .then(friedEgg => console.log(friedEgg))
// .catch((error) => console.log(error.name));


getChicken()
.catch((error) => {
    console.log(error.name);
    return 'chicken'; // 에러잡아주고 대체값리턴
})
.then(fetchEgg)
.then(fryEgg)
.then(console.log);
