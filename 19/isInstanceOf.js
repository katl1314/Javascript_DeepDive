function Person(name) {
    this.name = name;
}

const me = new Person("a");

function isPrototypeOf(instance, consturctor) {
    const prototype = Object.getPrototypeOf(instance);

    if (prototype === null) {
        return false;
    }

    return (
        prototype === consturctor.prototype ||
        isPrototypeOf(prototype, consturctor)
    );
}

console.log(isPrototypeOf(me, Person)); // me 프로토타입 체인상에 Person의 프로토타입에 바인딩된 객체가 있으면 true
console.log(isPrototypeOf(me, Object));
console.log(isPrototypeOf(me, Array)); // me 프로토타입 체인상에 Array의 프로토타입에 바인딩된 객체가 없기 때문에 fasle
