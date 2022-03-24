const trueValue = true;

console.log("true -> 1 : ", +trueValue);
console.log("true -> -1 : ", -trueValue);

const strValue = "Javascript";
console.log('"javascript" -> NaN : ', +strValue);
console.log('"javascript" -> NaN : ', -strValue);

// value의 boolean값을 반환함. 0 or '' or NaN or null, undefined등은 false으로 반환
console.log("============= !! ==============");
console.log("!!strValue : ", !!strValue);
console.log("!!'' : ", !!"");
console.log("!!null : ", !!null);
console.log("!!undefined : ", !!undefined);
console.log("!!function(){} : ", !!function () {}); // true(위 사례를 제외한 나머지 표현식은 true가 반환되더라....)

// typeof: 피연산자의 데이터 타입을 확인하는 기능
// 현재의 문제점 : null의 typeof가 'null'이 아닌 'object'으로 반환되는 현상은 오래전부터 버그로 인식되어 있으나, 수정되지 않음.
// 따라서 null체크의 경우 var temp = null; temp === null와 같은 방식으로 검사한다.
console.log("============= typeof ==============");
console.log("typeof 0", typeof 0); // number
console.log("typeof 'javascript'", typeof "javascript"); // string
console.log("typeof true", typeof true); // boolean
console.log("typeof {}", typeof {}); // object

console.log("typeof Symbol('label')", typeof Symbol("label")); // symbol
console.log("typeof []", typeof []); // object
console.log("typeof function(){}", typeof function () {}); // function

console.log("typeof undefined", typeof undefined); // undefined
console.log("typeof null", typeof null); // object !!!!이게 버그
console.log("typeof NaN", typeof NaN); // number

// Object.is(a, b) 메서드를 이용하여 더 정확하게 비교가 가능하다.
console.log("============= ===과 Object.is 비교 ==============");
console.log("0 === -0 :", 0 === -0); // true
console.log("Object.is(0, -0)", Object.is(0, -0)); // false

// OR연산자
console.log("============= OR연산자 ==============");
console.log("true || false", true || false); // 앞 조건이 true이면 반드시 true가 반환된다.
console.log("true || true", true || true); // 앞 조건이 true이면 반드시 true가 반환된다.
console.log("false || true", false || true); // 앞 조건이 false이면 뒤 조건이 true여부를 확인한다. -> true이므로 true가 반환
console.log("false || false", false || false); // 앞 조건이 false이면 뒤 조건이 true여부를 확인한다. -> false이므로 앞 조건 false가 반환됨.

// AND연산자
console.log("============= AND 연산자 ==============");
console.log("true && true", true && true); // 앞 조건이 true이면 뒤 조건이 실행됨
console.log("true && false", true && false); // 앞 조건이 true이면 뒤 조건이 실행됨
console.log("false && true", false && true); // 앞 조건이 false이면 반드시 false
console.log("false && false", false && false); // 잎 조건이 false이면 반드시 false

// 지수연산자
// ES7에 추가된 기능으로 Math.pow(n, m)을 대체함 => n ** m
console.log("Math.pow(2, 3)", Math.pow(2, 3)); // 8
console.log("2 ** 3", 2 ** 3); // 2^3 => 8

// NOT연산자
var isCheck = false;
console.log("!isCheck", !isCheck); // false -> true

console.log("=========== 삼항 연산자 ============");
var ok = isCheck ? 5 : 4; // 삼항 연산자는 표현식으로 갑으로 사용이 가능함.
console.log(ok);
