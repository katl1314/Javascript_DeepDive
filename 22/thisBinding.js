// 객체 리터럴 생성
// foo함수를 호출하여 중첩함수 bar를 호출하여 객체 myObj의 프로퍼티 name을 참조해보자.
const myObj = {
    name: "James", // 프로퍼티 : 객체의 상태 데이터
    foo() {
        // 중첩 함수
        // foo메서드 내 this를 바인딩하는 임시 변수를 선언하고, 변수를 bar함수내에서 사용해보자.
        const that = this;
        function bar() {
            console.log(that.name); // 일반 함수의 this는 메서드 foo를 포함하는 객체를 참조하지 않고, 전역객체를 참조한다.
            console.log(this.name);
        }
        // 화살표 함수 내 this는 상위 스코프의 this를 참고한다.
        /* const bar = () => {
            console.log(this.name);
        }; */
        // bar(); // 중첩함수 일반 함수로 호출함.
        // Function.prototype.call/apply/bind 메서드를 이용하여, this를 바인딩하고 호출해보자.
        // Function.prototype.call/apply : 함수를 간접 호출 (함수의 첫번째 인자를 통해 this를 바인딩할 수 있음.)
        // Function.prototype.bind : 함수를 재정의 (함수의 첫번째 인자를 통해 this를 바인딩할 수 있음.)
        bar.call(this);
    }, // 메서드 : 상태 데이터를 참조, 조작
};

myObj.foo(); // 메서드 호출
