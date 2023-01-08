function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
}
getChicken()
    .catch(() => '🐔')
    .then((chicken) => fetchEgg(chicken))
    .then((egg) => fryEgg(egg))
    .then((meal) => console.log(meal))
    .catch((error) => console.log(error));

// 함수로 만들어서 함수안에서 async, await이용하여 작성
// function makeFriedEgg() {
//     return getChicken()
//     .catch(() => '🐔')
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
//     .then((meal) => {
//         console.log(meal);
//         return meal});
// }

// function makeFriedEgg() {
//     return getChicken()
//     .catch(() => '🐔')
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
    
// }

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return await fryEgg(egg);
    
}
makeFriedEgg()
.then(console.log)

//////////////////////////////////////////////////////////////////
//직접 짬
async function getResult () {
    try {
        const chicken = await getChicken();
        const egg = await fetchEgg(chicken);
        const friedEgg = await fryEgg(egg);
        return friedEgg;
    } catch(error) {
        return fetchEgg('🐔').then((chicken) => fryEgg(chicken));
    }

}

getResult()
.then(result => console.log('result', result))