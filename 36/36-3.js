function parseURL(url) {
    const [host, protocol, path] = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    return {
        protocol,
        host,
        path,
    };
}

const parsedURL = parseURL(
    "https://developer.mozilla.org/ko/docs/Web/Javascript"
);

console.log(parsedURL);

// 배열 디스트럭처링은 Rest파라미터 처럼  Rest요소를 추가할 수 있음.
// Rest요소는 Rest파라미터 처럼 배열 마지막에 위치해야함

const [one, ...other] = [1, 2, 3, 4, 5];

console.log(one); // 1
console.log(other, ...other); // [ 2, 3, 4, 5 ]
