class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi, ${this.name}`;
    }
}

class Derived extends Base {
    // constructor를 정의하지 않으면 암묵적으로 빈 constructor생성함.
    sayHi = () => {
        // 화살표 함수 내 super사용시 상위 스코프의 super를 참조함.
        // super는 원래 ES6메서드에서만 사용이 가능함.
        // 근데 ES6메서드가 없는 경우, constructor의 super 바인딩을 참조함.(정의 하지 않아도 자동 생성)
        return `${super.sayHi()}, Long time no see`;
    };
}

const me = new Derived("James");
console.log(me.sayHi());

// Rest문법의 경우 arguments처럼 함수로 전달받은 인자의 개수가 정해지지 않을 때 사용하는 것이 좋다.
// Rest문법 : ...식별자 <= (1, 2, 3, 4, 5)
// Rest문법 사용시 함수의 인수 목록을 배열로 전달받음.
// Rest문법은 반드시 하나만 올 수 있으며, 무조건 마지막 인자로 전달받는다.

function sum(...args) {
    console.log(args); // Rest문법 사용시 함수의 인자 리스트를 배열로 저장해....
    return args.reduce((prev, current) => prev + current, 0);
}

function argumentsSum() {
    // 이터러블 객체를 배열로 변환해보자.
    // Array.from(iterable);
    // Array.prototype.slice.call(iterable);
    console.log(Array.from(arguments), Array.prototype.slice.call(arguments));
    return Array.from(arguments).reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(argumentsSum(1, 2, 3, 4, 5));

function add(n, m) {
    // 단축평가를 이용하여 값이 undefined이면 0으로 치환하도록 함.
    n = n || 0;
    m = m || 0;
    return n + m;
}

console.log(add());
console.log(add(5));
console.log(add(10, 20));

// 매개변수 기본값으로 하면?
function add2(n = 0, m = 0) {
    // 단축평가 없이도 기본값 세팅함.
    return n + m;
}

console.log("add2", add2());
console.log("add2", add2(5));
console.log("add2", add2(10, 20));
