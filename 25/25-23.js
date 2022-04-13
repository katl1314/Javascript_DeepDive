/**
 * 프로퍼티
 * 인스턴스 프로퍼티
 *  - 클래스의 constructor 내부에서 정의해야함.
 * 
 * class Person {
 *  consturctor(name) {
 *      this.name = name; <-- 인스턴스 프로퍼티
 *  }
 * }
 * 
 * 클래스는 constructor를 실행하기전에 this에 생성한 인스턴스인 빈 객체를 바인딩 한다.
 * constructor에 인스턴스 프로퍼티를 정의함으로서 인스턴스를 초기화.
 * 
 * 인스턴스 프로퍼티는 this.name = name;처럼 구성, public하다.
 */

class Person {
    // 생성자
    // 인스턴스 초기화
    constructor(firstName, lastName) {
        this.firstName = firstName; // 인스턴스 프로퍼티 (public함)
        this.lastName = lastName;
        // 클래스는 암묵적으로 this(인스턴스)를 반환, 원시값 반환시 무시되며, 참조값 반환시 인스턴스가 아닌 참조값이 반환됨.
        // return {};
    }

    // 접근자 프로퍼티 -> prototype의 프로퍼티
    set fullName(fullName) {
        // 인스턴스 프로퍼티에 값을 할당하거나, 별도 행위가 필요시
        [this.firstName, this.lastName] = fullName.split(' ');
    }

    get fullName() {
        // 인스턴스 프로퍼티에 접근시 값을 조작하거나 별도 행위 필요시 사용함.
        return `${this.firstName} ${this.lastName}`;
    }
}

const p= new Person('Ungmo', 'Lee');
console.log(p.firstName); // 인스턴스 프로퍼티 접근 가능.

//접근자 프로퍼티 사용해보기
//set의 경우 함수로 호출하는 방식이 아닌 프로퍼티에 값을 바인딩 하는 방식임
p.fullName = 'Minhyeok Choi';
console.log(p.fullName);    // 접근자 프로퍼티 getter함수 호출

console.log(Object.getOwnPropertyDescriptors(p.__proto__)); // 인스턴스 프로퍼티와 접근자 프로퍼티는 클래스 함수 객체가 아닌 프로토타입 객체이다.

/**
 * 접근자 프로퍼티는 setter, getter로 구성되어 있고, enumerable, configurable이 추가적으로 있음
 * setter(인스턴스 프로퍼티 값 할당)는 인스턴스 프로퍼티 값을 할당할 때마다  프로퍼티 값을 조작, 행위를 함.
 * getter(인스턴스 프로퍼티 값 참조)는 인스턴스 프로퍼티를 참조하여 값을 조작하거나, 별도의 행위를 함.
 * 클래스의 메서드는 기본적으로 프로토타입 메서드로 된다.
 * 접근자 프로퍼티 또한 인스턴스 프로퍼티가 아닌 프로토타입 프로퍼티가 된다.
 * 
 * 인스턴스 프로퍼티 == 필드
 * 자바스크립트의 인스턴스 프로퍼티는 반드시 constructor내부에서 this에 프로퍼티를 추가하는 방식으로 인스턴스 프로퍼티를 초기화&정의해야함.
 * ==> 반드시 this(인스턴스)를 참고해야함. constructor에서 this를 리턴하기 때문에
 * class body는 무조건 메서드나 접근자 프로퍼티만 정의 가능함. 이외 지역에서 선언시 Syntax Error발생
 * 
 * 다만 2021년 1월 이후부터 class 몸통에서도 클래스 필드 정의가 가능함. 최신형 브라우저, 최신형 Node.js에서만 동작함.
 * 
 * 자바스크립트의 클래스는 constructor나 메서드나 this를 반드시 사용하여 인스턴스 프로퍼티를 참조한다.
 */