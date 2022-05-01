/**
 * Symbol 메서드
 * 1. Symbol.for(key) : 인수로 전달한 문자열을 키로 사용하여, 키와 심벌 값이 쌍으로 저장되어 있는 전역 레지스트리에서 해당 키와 일치하는 심벌 값을 반환함.
 * 전역 심볼 레지스트리에 저장되어 있는 key에 매핑된 심볼값 반환
 * 전역 심벌 레지스트리
 *    key : 심볼값
 *
 * 2. Symbol.keyFor(symbol) : 전역 심볼 레지스트리에 저장된 심볼 값의 키를 추출함.
 */

const mySymbol1 = Symbol.for("mySymbol"); // 전역 심볼 레지스트리에 해당 key로 저장된 심볼값이 있는지 검사, 없으면 새로 생성함.
const mySymbol2 = Symbol.for("mySymbol"); // 전역 심볼 레지스트리에 함수로 전달한 key로 저장된 심볼값이 있으므로, key와 일치하는 심볼값을 반환.

console.log(mySymbol1, mySymbol2, mySymbol1 === mySymbol2);

console.log(Symbol.keyFor(mySymbol1), Symbol.keyFor(mySymbol2)); // 심볼 값의 key를 반환함.
