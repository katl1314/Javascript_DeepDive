// 빈 객체 생성
const person = new Object();

console.log(person); // {}

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
    console.log(`Hi, My name is ${this.name}`);
};

// 객체 출력
console.log(person);
person.sayHello();

/**
 * var a = 10;
 *
 * a.toFixed(2);   // new Number(a).toFixed(2) => 잠시 래퍼객체로 감싼다음에 toFixed호출 후 래퍼객체는 사라짐.
 */

// 객체 리터럴 방식은 여러 개를 생성할때 비효율적이다.(동일한 프로퍼티를 생성하는 만큼 추가해야하기 때문에)
// 하나의 생성자 함수를 만들면 굳이 여러개를 만들지 않아도 동일한 객체를 생성하니 개꿀이더라.
function Circle(radius) {
    console.log(new.target === Circle); // 생성자 함수로 호출하면 값이 들어옴.
    this.radius = radius;
    this.getDiameater = function () {
        return this.radius * 2;
    };
    // 암묵적으로 this를 반환한다.
    // 만약 명시적으로 참조형 데이터를 리턴하면 인스턴스는 객체를 나타낸다.
    // 만약 명시적으로 원시값을 리턴하면 무시함.(this가 암묵적으로 반환)
    // return {};
}

const c1 = new Circle(5); // 인스턴스 생성, 생성자 함수의 this는  인스턴스를 가리킨다.
const c2 = new Circle(10); // 인스턴스 생성

console.log(c1, c2);

// new.target을 이용하여 생성자 함수로 호출하는지, 일반 함수로 호출하는지 체크한다.
Circle(10);
/**
 * 함수는 객체이나, 일반 객체와 다름.
 * 일반 객체는 호출할 수 없으나, 함수는 호출할 수 있음.
 *
 * 이유? 함수 객체의 내부 메서드/슬롯이 일반객체와 다르게 [[Environement]], [[FormalParameters]]등 내부 슬롯과, [[Call]], [[Construct]]를 추가로 갖는다.
 *
 * [[Call]]: 일반 함수로 호출할 경우 내부 메서드 [[Call]]을 실행한다.
 * [[Consturct]]: 생성자 함수로 호출할 경우 내부 메서드 [[Construct]]를 실행한다.
 *
 * 화살표함수는 생성자 함수로 사용할 수 없음. 반드시 함수 선언문, 함수 표현식이어야만함.
 */
