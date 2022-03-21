import _ from "lodash";

const obj1 = {
  num: 1,
  depth: {
    a: 2,
    b: true,
    third: {
      c: "test",
      e: {},
      f: function () {},
    },
  },
};

const deepClone = _.cloneDeep(obj1);

// console.log(deepClone, obj1, deepClone === obj1);

deepClone.depth.third.c = "aaaaa";
console.log(deepClone, obj1);
