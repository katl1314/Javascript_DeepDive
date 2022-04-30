/**
 * String : 문자열 관련 자바스크립트 빌트인 객체로, 생성자 함수로 사용가능함.
 * 문자열 처리를 위한 프로퍼티와 메서드를 제공함.
 * String은 생성자 함수로 인스턴스를 생성할 수 있음.
 */

const str1 = new String("Lee"); // 인스턴스 반환
console.log(Object.getOwnPropertyDescriptors(str1)); // 객체의 프로퍼티를 확인할 수 있음.
// length프로퍼티 사용해보자.
console.log(str1.length); // length프로퍼티 사용시 잠시 래퍼 객체를 생성후 length프로퍼티를 호출한 다음, 래퍼 객체를 해제함. (문자열의 길이를 알 수 있음.)

// 0번째 요소 변경
str1[0] = "H"; // 문자열은 원시값으로, 변경 불가능.
console.log(str1[0]); // key가 '0'인 요소를 반환함.

// String은 유사 배열이며, 이터러블한 객체임
console.log(Array.from(str1)); // 이터러블 객체 -> 배열
console.log(Array.prototype.slice.call(str1)); // 이터러블 객체 -> 배열

// 이터러블 객체 순회 ===> 객체[Symbol.iterator]();
const test = str1[Symbol.iterator]();

// eslint-disable-next-line no-constant-condition
while (true) {
    const { done, value } = test.next();
    // next메소드 호출하여 이터러블 객체 순회 종료 시 done은 true으로 반환함.
    if (done) {
        break;
    }
    console.log(value);
}

// 명시적 형변환은 new없이 String함수를 호출한다. 함수의 인자는 변환할 값을 전달함.
const number = 100;
console.log(String(number), typeof String(number)); // 사용자에 의한 명시적 형변환
console.log(String(Infinity), typeof String(Infinity)); // 사용자에 의한 명시적 형변환
console.log(+"10" * 5); // +"문자" => 문자가 모두 숫자로 구성되어 있으면 형변환.
/*
const Singleton = (function () {
    let instance = null;
    // 생성자 함수
    function Singleton(name, age) {
        this.name = name;
        this.age = age;
    }

    // 프로토타입 ES6메서드 동적 정의
    Singleton.prototype = {
        constructor: Singleton,
        getName() {
            return this.name;
        },
        getAge() {
            return this.age;
        },
    };

    // 정적 메서드 선언
    Singleton.createInstance = function (name = "", age = 0) {
        if (!instance) {
            instance = new Singleton(name, age);
            return instance;
        }
        return instance;
    };

    return Singleton;
})();

const person = Singleton.createInstance("james", 30);
console.log(person.getName());
console.log(person.getAge());
console.log(person);

const person2 = Singleton.createInstance("Kim", 20); // Singleton 패턴을 적용하였기 때문에 반드시 하나의 인스턴스만 올 수 있음.
console.log(person2);
*/
