// 접근자 프로퍼티(Accessor Property)
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        // this.fullName = `${this.lastname} ${this.firstname}`;
    }
    // 함수에 접근할때 get 호출
    get fullName() { //동작이아니라 이름같은 속성일때 함수호출하는것처럼()안써도되게함
        return `${this.lastname} ${this.firstname}`; //프로퍼티의 일부분인데 무언가 조함해서 만들때
    }
//할당할때  set함수 호출
    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student('수지', '김');
student.firstname = '안나' // constructor에서 한번만들어지고 fullname업데이트되지않음
console.log(student.firstname);
console.log(student.fullName);
// console.log(student.fullName);
student.fullName = '김철수';
