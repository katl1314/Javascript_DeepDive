var value = 1;

const obj = {
    value: 100,
    foo: function () {
        console.log("1", this.value);
        setTimeout(
            /* function () {
                // 브라우저에서는 var키워드 사용하여 전역 변수 사용할 경우 전역객체의 프로퍼티 추가
                console.log("2", this.value); // window.value
            }.bind(this), // 콜백함수도 일반 함수이므로 this는 전역객체를 가리키며 Function.prototype.bind를 이용하여 this를 바인딩하고 함수를 재정의해야함. */
            () => {
                console.log("2", this.value); // 화살표 함수의 this는 상위 스코프의 this를 참조하기 때문에 1이 아닌 100이 반환
            },
            100
        );
    },
};

obj.foo();
