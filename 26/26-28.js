/**
 * this는 화살표 함수와 일반 함수를 구분하는 가장 중요한 요소임
 * 일반 함수의 this는 어떠한 방식으로 호출하는지에 따라 달라짐.
 *  1. 일반 함수로서 호출 : this는 전역객체를 가리킴
 *  2. 생성자 함수로서 호출 : this는 생성자 함수로부터 만들어진 인스턴스를 가리킴.
 *
 * 근데 화살표 함수는 자체적으로 this, arguments, super, new.target이 존재하지 않기 때문에
 * 스코프 체인에 따라 가장 가까운 일반 함수의 this를 참조하게 된다는 점에서 차이점이 있음.(상위 스코프의 this를 참조함, 화살표 함수 자체 this를 갖지 않기 때문.)
 *
 *
 */
console.log(1);
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    // 프로토타입 메서드
    add(arr) {
        return arr.map(
            function (d) {
                return `${this.prefix}-${d}`;
            }.bind(this) // 일반 함수 내 this를 binding후 새로운 함수를 만든다.
        );
    }

    add3(arr) {
        return arr.map(function (d) {
            return `${this.prefix}-${d}`;
        }, this); // Array.prototype.map함수의 두번째 인자로 this를 함수 내부의 this에 바인딩
    }

    add2(arr) {
        // 화살표 함수를 사용할 경우 스코프 체인 상 가장 가까운 함수의 this를 참조하기 때문에 더 간단하게 사용이 된다.
        console.log("add2", this); // 콜백함수을 화살표함수로 정의할 경우 화살표함수내 this는 상위 스코프인 add2함수의 this(add2는 프로토타입 메서드로 인스턴스를 가리킴)를 참조한다.
        return arr.map((d) => `${this.prefix}-${d}`);
    }
}

const prefixer = new Prefixer("-webkit-");

console.log(prefixer.add(["transition", "user-select"])); // -webkit-transition, -webkit-user-select
console.log(prefixer.add2(["transition", "user-select"])); // -webkit-transition, -webkit-user-select
console.log(prefixer.add3(["transition", "user-select"])); // -webkit-transition, -webkit-user-select

/**
 * Array.prototype.map(function(){}, thisBinding?); // Array.prototype.map의 경우 두번째 인자로 함수 내 this를 바인딩할 객체를 전달할 수 있음.
 * Array.prototype.map(function(){}.bind(this)); // 일반 함수로 호출시 함수 내부에 this를 참조할 경우 전역객체를 가리키므로 bind메서드를 이용하여 this를 바인딩 후 함수를 새로 만듦.
 * Array.prototype.map(() => {console.log(this)}); 스코프 체인상 가장 가까운 일반 함수의 this,  super, arguments, new.target을 참조함.
 */
