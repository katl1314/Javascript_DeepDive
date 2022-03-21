function sum(a, b, c) {
  return a + b + c;
}

/* Function.prototype.curry = function (one) {
  let len = this.length; // 함수의 매개변수 개수
  let args = [];
  let self = this;

  function next(oneVal) {
    args = args.concat(oneVal);
    if (len === args.length) {
      console.log(self);
      return self.apply(null, args);
    } else {
      return function (value) {
        return next(value);
      };
    }
  }

  return next(one);
};

console.log(sum.curry(1)(2)(3)); */

Function.prototype.partial = function () {
  let args = Array.from(arguments);
  return function () {
    args = args.concat(Array.from(arguments));
    return this.call(null, ...args);
  }.bind(this);
};

const a = sum.partial(1, 2);
console.log(a(3));
