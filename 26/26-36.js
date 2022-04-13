global.num = 10; // globalThis는 브라우저에서 전역객체(window), node환경에서 global을 통합함.
const counter = {
    num: 0,
    increase: () => {
        // 상위 스코프가 전역 스코프이므로 this는 전역객체를 가리킴...
        console.log(this);
        return ++this.num;
    },
};

console.log(counter.increase());
