/**
 * adapter 패턴은 객체를 생성하는 패턴은 아님.
 * 새로운 구조를 원활하게 변경하거나, 새 구조에서 기존 구조로 전환하는데 유용함.
 */

const currentAdapter = {
  vote: function () {
    console.log("현 황제를 계속 지지합니다.");
  },
};

const rufusAdapter = {
  vote: function () {
    console.log("루푸스를 황제로 추대합니다.");
  },
};

const SenateSystem = (function () {
  function SenateSystem(adapter) {
    this.adapter = adapter;
  }

  SenateSystem.prototype.vote = function () {
    this.adapter.vote();
  };

  return SenateSystem;
})();

let seneteSystem = new SenateSystem(currentAdapter);
seneteSystem.vote();

seneteSystem = new SenateSystem(rufusAdapter);
seneteSystem.vote();
