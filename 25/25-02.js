/**
 * 2021년 1월 이전에는 자바스크립트 클래스는 자바 클래스와 달리 클래스 필드가 존재하지 않음
 * 인스턴스 프로퍼티 경우 클래스의 constructor내부에서 초기화 하며, constructor와 메서드에서 this에 참조된 인스턴스 프로퍼티를 참조할 수 있음.
 * 
 * 다만 Node버전을 16.13.1설정 후 아래와 같이 클래스 필드를 선언하게 되어도 Syntax에러 발생하지 않음.
 */
class Person {
    // 클래스 필드에서는 this를 사용하지 않으며, 값이 할당되지 않으면 자동으로 undefined로 초기화.
    name = 'choi'; // public
    // private필드 선언, 식별자 앞에 '#'을 추가한다. (클래스 내부에서 참조할 수 있으며, 외부에서는 참조 불가)
    // private필드는 constructor에서 정의할 수 없으며, 클래스 내부에서 해야함.
    #privateValue = 'choi';
    // 클래스 필드에 함수를 생성하게 되면 프로토타입 메서드가 아닌 인스턴스 메소드가 됨.
    getName = () => this.name;
    
    // 프로토타입 메서드
    test() {
        return this.name + this.#privateValue;
    }

    // static 필드
    static staticValue = 'static Value';
    static staticFunc = function() {
        return Person.staticValue; // static메서드에서도 static 필드 참조시 클래스 이름을 이용하여 참조한다.
    }
}

const p = new Person();
console.log(p, Object.getOwnPropertyDescriptors(Person.prototype));

/**
 * 클래스 필드도 인스턴스 프로퍼티와 마찬가지로 public하다.
 */

// public
console.log(p.name);

// private
console.log(p['#privateValue']); // #privateValue은 private필드이므로 외부에서 참조할 수 없음.

console.log(p.test());// 프로토타입 메서드 호출

// static 메서드 호출 (인스턴스로 호출할 수 없고, 클래스 이름으로 호출한다.)
console.log(Person.staticFunc())