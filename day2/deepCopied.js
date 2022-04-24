function deepCopied(obj) {
  let datas = {};
  for (let p in obj) {
    if (typeof obj[p] === "object") {
      // 리커시브 함수를 이용하여 내부 객체의 항목을 저장함.
      datas[p] = deepCopied(obj[p]);
    } else {
      datas[p] = obj[p];
    }
  }
  return datas;
}

let origin = {
  a: 1,
  b: 2,
  c: function () {},
  d: {
    e: false,
  },
};

console.log(deepCopied(origin));
