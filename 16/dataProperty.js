/**
 * 데이터 프로퍼티()
 */

/**
 * 데이터 프로퍼티
 * 기본값은 모두 false
 * 1. value : 프로퍼티 값
 * 2. writable : 프로퍼티 값 변경 여부
 * 3. enumerable : 프로퍼티 열거 가능 여부
 * 4. configurable : 프로퍼티 재정의 가능 여부를 나타냄. false시 프로퍼티 삭제 및 값 변경이 금지.
 * 단 writeble이 true이면 configurable상관없이 value와 writable의 변경은 허용함.
 */

const person = {
    /**
     * 데이터 프로퍼티
     * value, writable, enumerable, configurable
     */
    firstName: "Ungmo",
    lastName: "Lee",

    /**
     * 접근자 프로퍼티
     * 접근자 프로퍼티는 함수형태로 호출하는 방식이 아닌 프로퍼티 접근하는 것처럼 해야함.
     * person.fullName;  // getter
     * person.fullName = 'Ungmo Lee';   // setter
     */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    },
};

// 접근자 프로퍼티 getter호출

console.log(person.fullName);

// 접근자 프로퍼티 setter를 호출하여 firstName, lastName 변경

person.fullName = "Kunmo Kim";

console.log(person.fullName);
/**
 * firstName: {  // 데이터 프로퍼티      
    value: 'Kunmo',   
    writable: true,   
    enumerable: true, 
    configurable: true
  },
  lastName: {
    value: 'Kim',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {   // 접근자 프로퍼티, value, writable이 없고 set, get이 생김
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
  }
 */
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

/**
 * __proto__은 접근자 프로퍼티이다.
 */

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
console.log(Object.getOwnPropertyDescriptor(Object, "prototype"));
