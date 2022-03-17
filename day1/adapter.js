/**
 * https://www.zerocho.com/category/JavaScript/post/57babe9f5abe0c17006fe230
 */

let SenateSystem = (function () {
  function SenateSystem(adapter) {
    this.adapter = adapter;
  }

  SenateSystem.prototype.vote = function () {
    this.adapter.vote();
  };
  return SenateSystem;
})();

let currentAdapter = {
  vote: function () {
    console.log("현 황제를 지지합니다.");
  },
};

let rufusAdapter = {
  vote: function () {
    console.log("루푸스를 황제로 추대합니다.");
  },
};

let senateSystem = new SenateSystem(currentAdapter);
senateSystem.vote();

senateSystem = new SenateSystem(rufusAdapter);
senateSystem.vote();

/**
 * 적응자(Adapter) 패턴은 두 가지 이상의 구조에서 유연하게 전환하고자 할때 유용함.
 * 인자에 따라 구조가 변경됨.
 */
