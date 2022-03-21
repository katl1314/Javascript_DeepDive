/**
 * https://www.zerocho.com/category/JavaScript/post/57b9692ae492d01700b0b75a
 * 에서 참고하였습니다.
 *
 * 추상 팩토리  abstrct factory
 * 여러 팩토리를 동시에 사용하고 싶을 때 사용함.
 */

// 추상 팩토리
// 단일 책임 원칙을 위반해서는 안된다.
// Factory에서는 구현 방법에 대해서만 서술해야하며, 분류하는 책임은 포함되서는 안된다.
let abstractCharaterFactory = (function () {
  let jobs = {};
  return {
    // Charater.prototype.attack이 있을 경우 등록이 가능함. 객체에 클래스를 넣어버림.
    addJob: function (job, Charater) {
      if (Charater.prototype.attack) {
        jobs[job] = Charater;
      }
    },
    // 등록한 직업을 바탕으로 실제 객체 생성
    create: function (job, options) {
      let Charater = jobs[job];
      return Charater ? new Charater(options) : null;
    },
  };
})();

// 실제 객체
let Emperor = (function () {
  function Emperor({ name }) {
    this.name = name;
  }
  Emperor.prototype.attack = function (target) {
    console.log(`${this.name}가 ${target}를 공격하였습니다.`);
  };

  Emperor.prototype.proclaim = function () {
    console.log(`${this.name}가 스스로 황제라고 칭했습니다.`);
  };
  return Emperor;
})();

let Governor = (function () {
  function Governor({ name }) {
    this.name = name;
  }

  Governor.prototype.attack = function (target) {
    console.log(`${this.name}가 ${target}를 공격하였습니다.`);
  };

  Governor.prototype.detray = function () {
    console.log(`${this.name}가 황제를 배신합니다.`);
  };
  return Governor;
})();

abstractCharaterFactory.addJob("emperor", Emperor);
abstractCharaterFactory.addJob("governor", Governor);

let nero = abstractCharaterFactory.create("emperor", { name: "Nero" });
let vindex = abstractCharaterFactory.create("governor", { name: "Vindex" });
let galba = abstractCharaterFactory.create("governor", { name: "Galba" });
let otho = abstractCharaterFactory.create("governor", { name: "Otho" });
let vitellius = abstractCharaterFactory.create("governor", {
  name: "Vitellius",
});
let rufus = abstractCharaterFactory.create("governor", { name: "Rufus" });
console.log("nero", nero);
console.log("vindex", vindex);
console.log("galba", galba);
console.log("otho", otho);
console.log("vitellius", vitellius);

nero.attack("vindex");
galba.detray("nero");
rufus.detray("galba");
