const apple = {
    name: 'apple',
    dsiplay: function() { //객체안에서 자기자신의 속성에 접근할떄는 항상 this붙여줌
        console.log(`${this.name} 입니다`)
    } 
}

apple.dsiplay();