let origin = {
  a: 1,
  b: 2,
  d: {
    e: false,
    f: {
      k1: "hello",
    },
  },
};

// 깊은 복사
let copied = JSON.parse(JSON.stringify(origin));

console.log(origin["d"] == copied["d"]);
