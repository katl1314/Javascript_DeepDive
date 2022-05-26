function* myGenerator() {
    // 처음 next메소드를 호출 시 yield 표현식만 처리하고 중단.
    // 아직 변수 x에는 값이 할당되지 않음.
    // value는 1, done은 false인 이터레이터 리절트 객체를 반환
    const x = yield 1;

    // 두번째 next메소드 호출 시 함수의 인자로 5를 전달하여 변수 x에 할당
    // 변수 y에는 아직 아무것도 할당되지 않음
    // value는 5와 10을 더한 15, done은 false인 이터레이터 리절트 객체를 반환
    const y = yield x + 10;

    // next메소드로 전달한 인자를 변수 y에 할당
    // 제너레이터 함수의 반환값인 x + y는 이터레이터 리절트 객체의 value에 할당
    // 제너레이터 함수가 종료되면서 done은 true으로 할당됨. => yield시 done은 false를 반환함.
    return x * y; // 제너레이터 함수에서 return은 함수 종료의 의미임.
}

const generator = myGenerator();
// 제너레이터의 next메소드는 yield 표현식에 할당받은 변수에 값을 전달할 수 있음.
console.log(generator.next());
console.log(generator.next(5)); // 두번째 yield의 변수 x에 5를 할당.
console.log(generator.next(10)); // 세번째 yield의 변수 y에 10을 할당
