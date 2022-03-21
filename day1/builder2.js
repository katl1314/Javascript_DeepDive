const makeLegion = function (leader) {
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
    build: function () {
      return new Legion(leader, adjutants, army);
    },
  };
};

const Legion = (function () {
  function Legion(leader, adjutants, number) {
    this.leader = leader;
    this.adjutants = adjutants;
    this.number = number;
  }

  Legion.prototype.attack = function ({ leader }) {
    console.log(`${this.leader}가 ${leader}를 공격하였습니다.`);
  };

  return Legion;
})();

const nero = makeLegion("nero")
  .setAdjutant(["otho", "vindex", "vitellius"])
  .setArmy(8000)
  .build();

const zero = makeLegion("zero")
  .setAdjutant(["Choi", "Kim"])
  .setArmy(10000)
  .build();
console.log(nero);
console.log(zero);

zero.attack(nero);
