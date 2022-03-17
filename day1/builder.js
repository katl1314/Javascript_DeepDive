/**
 * https://www.zerocho.com/category/JavaScript/post/57bab0ee5abe0c17006fe22f
 *
 * 빌더 패턴: 옵션이 많을때 사용함. 쉽게 설명해서 로봇을 조립한다고 생각함.
 */

let Legion = (function () {
  function Legion({ leader, adjutants, army }) {
    this.leader = leader || "";
    this.adjutants = adjutants || [];
    this.army = army || 0;
  }

  Legion.prototype.attack = function ({ leader }) {
    console.log(`${this.leader}군단은 ${leader}군단을 공격합니다.`);
  };
  return Legion;
})();

let makeLegion = function (leader) {
  let adjutants = null;
  let army = 0;
  return {
    setAdjutant: function (list) {
      adjutants = list;
      return this;
    },
    setArmy: function (number) {
      army = number;
      return this;
    },
    builder: function () {
      // 객체를 만들어 내는 생성자 역할을 빌더라고 한다.
      return new Legion({
        leader,
        adjutants,
        army,
      });
    },
  };
};

let galbaLegion = makeLegion("Galba")
  .setAdjutant(["otho", "vindex", "vitellius"])
  .setArmy(8000)
  .builder();

let rufusLegion = makeLegion("Rufus").setArmy(10000).builder();
console.log(galbaLegion);
console.log(rufusLegion);

galbaLegion.attack(rufusLegion);
