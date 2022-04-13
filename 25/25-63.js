/**
 * super키워드: 함수처럼 사용가능하고, this처럼 식별자로 사용 가능.
 * ex) super() => 슈퍼 클래스의 constructor를 호출
 * super키워드 참조시 슈퍼 클래스의 메서드 호출
 *
 * super 호출 : 슈퍼 클래스의 constructor를 호출한다.
 *
 * 만약에 슈퍼 클래스에서 사용하는 프로퍼티가 서브 클래스에서 그대로 갖는 경우 서브 클래스의 constructor는 생략할 수 있음.
 * 다만 서브 클래스에서 슈퍼 클래스 프로퍼티를 포함하여 추가한 프로퍼티를 가지고 인스턴스를 만드는 경우 constructor를 정의해야함.
 */

// 슈퍼 클래스
class Base {
    constructor(a, b) {
        // 데이터 프로퍼티 초기화
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }
}

class SubClass extends Base {
    // private 필드(ES2020이후 지원됨.)
    #field = 20;

    static staticField = 20;

    // 서브 클래스의의 데이터 프로퍼티가 슈퍼 클래스의 프로퍼티를 그대로 사용하는 경우 constructor를 생략해도 됨.
    test() {
        // 굳이 서브 클래스에서 super식별자 사용하지 않고, this를 이용해도 슈퍼 클래스의 메서드를 호출할 수 있음.
        return this.sum() + this.#field; // super키워드를 사용하지 않고 this를 사용시 SubClass내에서 sum메서드를 찾아서 호출하고, super식별자로 호출시 슈퍼클래스의 sum메서드를 찾아 호출함.
    }

    sum() {
        return this.#field + SubClass.staticField;
    }
}

const myClass = new SubClass(10, 20);
console.log(myClass.test());

/**
 * 메서드 축약 표현으로 정의한 메서드는 내부 슬롯 [[HomeObject]]를 갖는다.
 * 다만 일반 함수로 정의할 경우 갖지 않음.
 * 클래스 내에서 인스턴스를 참조할 경우 메서드나 constructor에서만 참조가 가능함. 일반 함수에서는 불가능.
 *
 * 객체리터럴 또한 메소드 축약 표현으로 메서드 정의했을 경우 super키워드를 사용할 수 있음.
 */
