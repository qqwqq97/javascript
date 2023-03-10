function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}
function fryEgg(egg) {
    return Promise.resolve(`${egg} => π³`);
}
function getChicken() {
    return Promise.reject(new Error('can not find π'));
}
getChicken()
    .catch(() => 'π')
    .then((chicken) => fetchEgg(chicken))
    .then((egg) => fryEgg(egg))
    .then((meal) => console.log(meal))
    .catch((error) => console.log(error));

// ν¨μλ‘ λ§λ€μ΄μ ν¨μμμμ async, awaitμ΄μ©νμ¬ μμ±
// function makeFriedEgg() {
//     return getChicken()
//     .catch(() => 'π')
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
//     .then((meal) => {
//         console.log(meal);
//         return meal});
// }

// function makeFriedEgg() {
//     return getChicken()
//     .catch(() => 'π')
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
    
// }

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = 'π';
    }
    const egg = await fetchEgg(chicken);
    return await fryEgg(egg);
    
}
makeFriedEgg()
.then(console.log)

//////////////////////////////////////////////////////////////////
//μ§μ  μ§¬
async function getResult () {
    try {
        const chicken = await getChicken();
        const egg = await fetchEgg(chicken);
        const friedEgg = await fryEgg(egg);
        return friedEgg;
    } catch(error) {
        return fetchEgg('π').then((chicken) => fryEgg(chicken));
    }

}

getResult()
.then(result => console.log('result', result))