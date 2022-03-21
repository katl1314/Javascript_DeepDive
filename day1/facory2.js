/*
  추상 팩토리(Abstract Factory)
  수 많은 서브 클래스를 특정 팩로리로 묶어, 한번에 교체가 가능함.

*/
const abstractCharaterFactory = (function () {
  // factory는 서브 클래스(Emperor, Governor)를 묶어
  let jobs = {};
  return {
    addItem: function (name, Charater) {
      jobs[name] = Charater;
    },
    create: function (name) {
      const Charater = jobs[name];
      return Charater ? new Charater(name) : null;
    },
  };
})();

const Emperor = (function () {
  function Emperor(name) {
    this.name = name;
  }

  Emperor.prototype.attack = function ({ name }) {
    console.log(`${this.name}(이)가 ${name}을 공격하였읍니다.`);
  };
  return Emperor;
})();

const Governor = (function () {
  function Governor(name) {
    this.name = name;
  }

  Governor.prototype.attack = function ({ name }) {
    console.log(`${this.name}(이)가 ${name}을 공격하였읍니다.`);
  };
  return Governor;
})();

abstractCharaterFactory.addItem("choi", Emperor);
abstractCharaterFactory.addItem("lee", Governor);
const choi = abstractCharaterFactory.create("choi"); // choi에 해당하는 클래스 Emperor 인스턴스 반환.
const lee = abstractCharaterFactory.create("lee"); // lee에 해당하는 클래스 Governor 인스턴스 반환.

console.log(choi);
console.log(lee);

choi.attack(lee);
lee.attack(choi);
