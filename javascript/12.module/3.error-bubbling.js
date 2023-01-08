// Bubbling up, Propagating
// 에러는 전파된다
// 에러는 최종 호출자가 잡아도되고 가장 근접한 곳에서 잡아도 됨
function a() {
    throw new Error('error');
}

function b() {
    try {
        a();
    } catch(error) {
        // console.log(error);
        console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군')
        throw error;
    }
}

function c() {
    b();
}

try{
    c();
} catch (error) {
    console.log('Catched');
}
console.log('done!')