/**
 * 소스코드 타입
 * 1. 전역 코드  ---> 전역 실행 컨텍스트
 * 2. 함수 코드  ---> 함수 실행 컨텍스트
 * 3. eval 코드  ---> eval 실행 컨텍스트
 * 4. 모듈 코드  ---> 모듈 실행 컨텍스트
 *
 * 소스코드 평가(선언) -> 실행 컨텍스트 -> 소스코드 실행 => 실행 컨텍스트(실행 결과 전달)
 *
 * 전역 실행 컨텍스트(전역 변수, 함수가 있을때 스택에 쌓이고, 처음이자 가장 마지막에 push pop)
 *   - Lexical Environment
 *      - Environment Recode : 소코프에 포함된 식별자 등록, 등록된 식별자에 바인딩된 값을 관리(스코프에 포함된 식별자의 값을 관리)
 *          - Object Environment Recode : Binding Object(var, function)[전역객체]
 *          - declarative Enviroment Recode : 변수들, ...(let, const, ...)
 *          - ThisBinding : Global This Value
 *      - OuterLexicalEnvironmentReference : 상위 스코프를 가리킨다. : 전역객체의 상위 스코프는 없기 때문에 null
 *   - Variable Environment
 *
 * 함수 실행 컨텍스트(함수 호출시 스택에 쌓임): 함수가 종료되면 자동으로 pop
 *   - Lexical Environment
 *      - Environment Recode : { 함수 매개변수, 식별자, arguments }
 *      - OuterLexicalEnvironmentReference : 상위 스코프내 실행 컨텍스트의 렉시컬 환경 -> 스코프 체인을 구현한다.
 *   - Variable Environment
 *
 * this binding의 경우 함수의 호출 방식에 따라 달라지느데, 기본적으로 전역 객체를 가리킨다.
 */

var x = 1;
const y = 2;

function foo(a) {
    var x = 3;
    const y = 4;

    function bar(b) {
        const z = 5;
        console.log(a + b + x + y + z);
    }

    bar(10);
}

foo(20);
