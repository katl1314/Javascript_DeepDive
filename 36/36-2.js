// 배열 디스트럭처링은 기본값을 설정할 수 있음.
const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3

const [e, g = 10, f = 20] = [1, 2];
console.log(e, g, f); // 1 2 20

const str1 = 'aaaa';
const str2 = "aaaa";

console.log(str1, str2);