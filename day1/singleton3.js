const Singleton = (function () {
  let instance = null;
  function init(value) {
    return {
      publicMethod: function () {
        return this.publicProp;
      },
      publicProp: value,
    };
  }

  return {
    getInstance: function (value) {
      if (!instance) {
        instance = init(value);
      }
      return instance;
    },
    removeInstance: function () {
      if (instance) {
        instance = null;
      }
    },
  };
})();

const first = Singleton.getInstance("first");
console.log(first.publicMethod());

Singleton.removeInstance(); // instance 초기화

const second = Singleton.getInstance("second");
console.log(second.publicMethod());
