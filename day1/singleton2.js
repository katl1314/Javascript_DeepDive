let Singleton = (function () {
  // -------------------------------------------------------
  // 싱글톤 패턴
  // -------------------------------------------------------
  let instance = null;

  function initalize() {
    return {
      // 메서드
      publicMethod: function () {
        return this.publicProp;
      },
      // 프로퍼티
      publicProp: "Singleton",
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initalize();
      }
      return instance;
    },
  };
})();

const first = Singleton.getInstance("first -- 1");
console.log(first.publicMethod());

const second = Singleton.getInstance("second -- 2");
console.log(second.publicMethod());

console.log(first, second, first === second); // true

function add(sum, count) {
  sum += count;
  if (count > 0) {
    return add(sum, count - 1);
  }
  return sum;
}

console.log(add(0, 10));
