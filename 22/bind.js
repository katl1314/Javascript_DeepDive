/**
 * Function.prototype.bind(thisArg?)는 메서드의 중첩함수 또는 콜백함수를 사용할 때 this의 불일치를 해결하기 위한 용도로 자주 사용된다.
 * 해당 함수는 Function.prototype.call, apply와 달리 함수를 호출하는 것이 아닌 재정의를 위한 것이고
 * 함수 호출을 별도로 해야함.
 *
 * setTimeout(funciton() {}.bind(this))
 */
