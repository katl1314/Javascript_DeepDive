// 함수 생성 시점과 함수 호이스팅
// 함수 표현식의 경우 변수 선언을 호이스팅하기 때문에 초기값이 undefined으로 들어감.
// 반대로 함수 선언식은 함수 전체를 호이스팅하기 때문에 함수를 호출해도 결과가 반환됨.

console.log(add(3, 5)); // 8
console.log(sub(2, 5)); // 함수 표현식은 함수 호이스팅이 아닌 변수 호이스팅이 발생하기 때문에 undefined로 초기화가 된다.

// 함수 선언문
function add(n, m) {
    return n + m;
}

// 함수 표현식(익명함수)
var sub = function (n, m) {
    return n - m;
};
