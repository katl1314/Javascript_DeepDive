/**
 * 클래스 상속솨 생성자 함수 상속
 * 생성자 함수의 상속은 프로토타입 체인을 통해 타 객체에서 상속받는 개념,
 * 클래스 상속은 기존 객체를 상속받아 새로운 클래스로 확장.
 */

class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    
    // 프로토타입 메서드
    eat() {
        return 'eat';
    }

    move() {
        return 'move';
    }
}

class Bird extends Animal {
    constructor(age, weight) {
        super(age, weight);
    }
    fly() {
        return 'fly';
    }
}

// 슈퍼클래스 Animal으로부터 상속받아 새로운 클래스로 확장한다.
// 코드 재사용에 유리함.
class Lion extends Animal {
    constructor(age, weight) {
        super(age, weight);
    }
    attack() {
        return 'attack';
    }
}

// Bird클래스로부터 만들어진 인스턴스는 Bird클래스의 데이터 프로퍼티, 프로토타입 메서드를 접근할 뿐 만 아니라 상속에 따라 슈퍼클래스의 메서드나 프로퍼티도 접근이 가능함.
const bird = new Bird(20, 10);
console.log(bird.fly()); 
console.log(bird.eat());
console.log(bird.move());

const lion = new Lion(25, 80);
console.log(lion.attack());

/**
 * A instanceof B : 우변의 객체의 프로토타입이 좌항 객체의 프로토타입 체인상에 존재하면 true, 존재하지 않으면 false를 반환한다.
 * bird -> Bird.prototype -> Animal.prototype -> Object.prototype
 */
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird instanceof Lion); // false

/**
 * 프로토타입 체인
 * 객체의 내부 슬롯 [[Prototype]](__proto__)를 통해 프로토타입 체인을 구성한다.
 */
console.log(Animal.prototype.__proto__ === Object.prototype);
console.log(Bird.prototype.__proto__ === Animal.prototype);
console.log(bird.__proto__ === Bird.prototype);