/**
 * 블록 레벨 스코프 : 렉시컬 환경을 새로 생성한 다음, 기존 전역 실행 컨텍스트의 렉시컬 환경을 덮어 씌운다.
 */

let x = 1;

if (true) {
    let x = 10;
    console.log(x);
}

console.log(x);
