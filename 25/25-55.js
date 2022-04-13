/**
 * 클래스 상속은 extends라는 키워드를 제공하기 때문에 클래스 확장이 간편하고 직관적이다.
 * 다만 생성자 함수의 상속은 기본적으로 제공하지 않음.
 *
 * 상속을 이용하여 클래스를 확장함.
 */

// 슈퍼 클래스
var Animal = (function () {
    // 생성자 함수에서 인스턴스 초기화
    function Animal(age, weight) {
        // 데이터 프로퍼티
        this.age = age;
        this.weight = weight;
    }

    Animal.prototype.eat = function () {
        return "eat";
    };

    Animal.prototype.move = function () {
        return "move";
    };
    return Animal;
})();

// 서브 클래스
// Animal 생성자 함수를 상속하여 확장한 Bird 생성자 함수
var Bird = (function () {
    function Bird() {
        // 1. Animal생성자 함수에 this와 arguments를 전달한다.
        Animal.apply(this, arguments);
    }

    // 2. Bird.prototype을 Animal.prototype을 갖는 객체로 교체함.
    Bird.prototype = Object.create(Animal.prototype);
    // 3. Bird.prototype을 Animal.prototype을 객체로 갖는 객체를 교체하였음으로 constructor는 Animal이 되므로 Bird으로 변경해야함.
    Bird.prototype.constructor = Bird;

    Bird.prototype.fly = function () {
        return "fly";
    };
    return Bird;
})();

// 서브 클래스
// Animal 생성자 함수를 이용하여 Lion 생성자 함수에 상속한다.
var Lion = (function () {
    // Animal생성자 함수에 this와 arguments를 전달한다.
    function Lion() {
        Animal.apply(this, arguments);
    }

    Lion.prototype = Object.create(Animal.prototype);
    Lion.prototype.constructor = Lion;

    Lion.prototype.attack = function () {
        return "attack";
    };
    return Lion;
})();

/**
 * extends 키워드
 * 상속을 통해 클래스 확장시 extends키워드를 사용해야함. 상속받을 클래스 정의
 * 클래스명 extends 생성자함수/클래스명
 */
const bird = new Bird(3, 5);
console.log(bird.move());
console.log(bird.eat());
console.log(bird.fly());
