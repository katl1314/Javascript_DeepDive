/**
 * currying : partial application처럼 인자를 미리 고정할 수 있으나,
 * currying은 하나씩 고정함.
 */

/* function multiplyThree(one) {
  return function (two) {
    return function (three) {
      return one * two * three;
    };
  };
}

const three = multiplyThree(4)(8)(2);
console.log(three); */

function multiplyFour(w, x, y, z) {
  return w * x * y * z;
}

Function.prototype.curry = function (one) {
  let self = this;
  let target = self.length;
  let args = [];
  function next(nextOne) {
    args = args.concat(nextOne);
    if (args.length === target) {
      return self.apply(null, args);
    } else {
      return function (nextOne) {
        // 함수를 반환...
        return next(nextOne);
      };
    }
  }
  return next(one);
};

const a = multiplyFour.curry(2)(3)(4)(5);
console.log(a);
