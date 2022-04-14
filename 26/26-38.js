const superObj = {
    a : 10,
    b : 20,
    sum() {
        return this.a + this.b;
    }
}

/* const subObj = {
    __proto__ : superObj,
    c : 30,
    test() {
        return super.sum() + this.c; // 서브클래스 메서드의 this는 서브클래스에 프로퍼티가 없는 경우 상속받은 슈퍼클래스의 프로퍼티나 메서드를 참고할 수 있음.
    }
} */

const subObj = Object.create(superObj);
subObj.c = 30;
subObj.test = function() {
    // es6의 메소드 축약 정의된 메서드가 아니면 super를 사용할 수 없다.
    return this.sum() + this.c;
}
console.log(subObj.test());