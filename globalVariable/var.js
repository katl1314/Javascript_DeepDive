var a = 1;
var b = 10;

var a; // 초기화문이 없으면 무시된다.
var b = 100; // 초기화문이 있으면 변수 b에 재할당.(자바스크립트 키워드 var가 없는것처럼 동작함.)

console.log(a, b);

// var는 함수 레벨 스코프로, 블록 레벨에서 선언해도 전역변수가 된다.

if (true) {
    a = 100; // 전역에서 선언한것과, 동일시 된다.
}

console.log(a, b); // 변수 ㅁ가 100으로 재할당되었다.

var i = 10;

for (var i = 0; i < 100; i++);

console.log(i); // for문도 if문처럼 마찬가지
