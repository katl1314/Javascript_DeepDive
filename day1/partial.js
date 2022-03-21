let plus = function (a, b, c) {
  return a + b + c;
};

/**
 * Partial application
 * - 함수에 여러 인수를 받을 때 일부 인자를 고정한 함수를 만든다.
 */
Function.prototype.partial = function () {
  let args = Array.from(arguments);
  return function () {
    return this.apply(null, args.concat(Array.from(arguments)));
  }.bind(this); // bind함수를 이용하여 함수에 this를 전달한다.
};

let plusa = plus.partial(1);
console.log(plusa(2, 3));

let plusb = plus.partial(30);
console.log(plusb(10, 220));
