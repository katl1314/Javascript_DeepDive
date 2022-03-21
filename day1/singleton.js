/**
 * 싱글톤(Singleton)패턴은 전체 시스템에서 하나의 인스턴스만 존재하도록 보장하는 객체 생성 패턴
 * 즉 객체 리터럴도 싱글톤 패턴이다.
 */

var singletonObj = {
  a: "값",
  b: function () {
    console.log("함수", this.a);
  },
};

// 객체 내 메서드가 function키워드를 사용하면 함수 블록의 this는 객체 singletonObj를 가리키고,
// 화살표 함수의 경우 undefined를 가리킨다.
singletonObj.b();

// 객체 리터럴 가지고 비공개 상태, 함수를 정의할 수 없음. 자바스크립트는 비공개 멤버가 필요시 클로저(closur)를 염두해야함.
// 비공개 메머를 가진 싱글톤 객체를 생성하려고 하면 클로저를 이용한다.
// 클로저를 이용하여 구현한 샘플이다.

let Singleton = (function () {
  /**
   * -----------------------------
   * 싱글톤 패턴 구현 코드
   * -----------------------------
   */
  let instance; // 비공개 멤버 변수 정의

  function init() {
    return {
      publicMethod: function () {
        return "hello Singleton return!!!!";
      },
      publicProp: "single value",
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

// 싱글톤 객체를 생성하여 publicMethod메서드 호출 가능함.
let first = Singleton.getInstance();
console.log("first.publicMethod", first.publicMethod());
console.log("first.publicProp", first.publicProp);

let second = Singleton.getInstance();
console.log("second.publicMethod", second.publicMethod());
console.log("second.publicProp", second.publicProp);

console.log(first);
console.log(second);
