let origin = {
  a: 1,
  b: 2,
  c: function () {},
  d: {
    e: false,
  },
};
// 얕은 복사
// Object.assign(target, source);
const copied = Object.assign({}, origin);

console.log("Object.assign", copied, origin, copied == origin);

const copied2 = { ...origin };

console.log("spread operation", copied2, origin, copied == origin);
