// 슈퍼 클래스
class Rectangle {
    constructor(width, height) {
        // 슈퍼 클래스 인스턴스 초기화.
        console.log(new.target); // 서브 클래스로 인스턴스 생성시 실제 인스턴스 생성은 슈퍼 클래스의 constructor에서 처리한다.
        this.width = width;
        this.height = height;
    }

    // ES6 메소드 축약형으로 정의한 프로토타입 메서드
    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `width = ${this.width}, height = ${
            this.height
        }, area = ${this.getArea()}`;
    }
}

// 서브 클래스
class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        // 암묵적으로 this에 빈 객체를 바인딩.
        // 상속관계에서 실질적으로 인스턴스는 서브클래스가 아닌 슈퍼 클래스에 위임하여 생성함.
        super(width, height); // 슈퍼 클래스의 constructor호출(무조건 먼저 호출하자.)
        this.color = color;
        // 암묵적으로 this(클래스의 인스턴스)를 반환
    }

    // 프로토타입 메서드
    getColor() {
        return this.color;
    }

    // 메서드 오버라이딩
    toString() {
        // ES6 메소드 축약형으로 정의한 메서드에서는 super키워드를 이용하여 슈퍼 클래스의 메서드나 프로퍼티 접근이 허용된다.
        // this.getColor는 프로토타입 체인에 의해 해당 클래스에 메서드가 존재하면 그 메서드를 사용하고, 없는 경우 슈퍼 클래스를 이동하여 메서드를 검색한다.
        return `${super.toString()}, color = ${this.getColor()}`;
    }
}

const redRectangle = new ColorRectangle(5, 10, "red");
console.log(redRectangle.toString());

console.log(redRectangle instanceof ColorRectangle);
console.log(redRectangle instanceof Rectangle);
