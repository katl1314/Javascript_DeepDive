/**
 * 표준 빌트인 생성자 함수 확장
 * extends키워드 이후에는 클래스 뿐만 아니라 생성자 함수같은 내부 메서드 [[Construct]]를 갖는 함수 객체로 평가되는 표현식이 모두 올 수 있음.
 * String, Boolean, Object같은 빌트인 객체도 [[Construct]] 내부 메서드를 갖는 생성자 함수이므로 상속하여 클래스 확장이 가능하다.
 */

class MyArray extends Array {
    /**
     * [Symbol.specials] => 새로운 배열을 반환하는 메서드가, 클래스의 인스턴스가 아닌 Array의 인스턴스를 반환하고자 한다.
     * 만약 Array의 인스턴스를 반환하게 되면 MyArray클래스의 메서드와 메서드 체이닝이 불가한다.
     * MyArray 클래스의 모든 메서드에 인스턴스가 아닌 Array를 반환할 때 정적 접근자 프로퍼티 Symbol.specials을 추가해야한다.
     * ==> MyArray내 메서드 체이닝 사용 불가능.
     */
    // static get [Symbol.species]() { return Array; }
    uniq() {
        // 중복된 배열 요소를 제거하고 반환한다. [1, 1, 2, 3] -> [1, 2, 3]
        return this.filter((v, i, array) => array.indexOf(v) === i);
    }
    average() {
        // 모든 배열 요소의 평균을 구한다.
        return this.reduce((pre, cur) => pre + cur, 0) / this.getLength();
    }
    getLength() {
        return this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
// MyArray클래스 내 static get [Symbol.specials]() {return Array}선언시 메서드에서 반환할 때 
// 인스턴스가 아닌 Array를 반환하므로 MyArray내 정의한 메서드는 사용 불가.
console.log(myArray.uniq().average());
console.log(myArray.getLength());
console.log(myArray.average());

console.log(Object.getPrototypeOf(myArray.__proto__) === Array.prototype);
console.log(myArray.filter((v, i, arr) => v) instanceof Array); // true

/**
 * MyArray클래스는 Array 빌트인 객체(생성자 함수)로부터 상속받아, 클래스를 확장함.
 * 그래서 추가 프로토타입 뿐만 아니라 Array.prototype의 메서드도 사용이 가능함.
 */
