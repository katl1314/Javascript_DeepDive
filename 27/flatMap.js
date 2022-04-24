const arr = ["hello", "world"];

const test = arr.flatMap((x) => x.split(""));
console.log(test);

const a1 = arr.flatMap((x, index) => [index, [x, x.length]]);
console.log(a1);
