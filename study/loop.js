/**
 * 반복문
 * for, while, do-while
 */

// 변수 선언문; 조건식; 증감식(생략 가능하며 블록문에서 증감식 처리해도 됨.)
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 무한 루프는 빠져나갈때 if를 통해 break으로 빠져나간다.
/* var i2 = 0;
function* generator() {
  while (true) {
    yield i2++;
  }
}

console.log(generator().next());
console.log(generator().next());
console.log(generator().next());
console.log(generator().next());
console.log(generator().next());
console.log(generator().next()); */

// 레이블 문: 이중 포문, n중 포문 사용할때 다중 포문에서 break 레이블명 입력시 전체 for loop를 종료할 수 있다.
// 안쓰는 걸 추천함. 객체의 프로퍼티인지 햇갈림. c언어의 goto처럼 극혐.
// 차라리 함수로 처리해서 break쪽에 return으로 바꿔서 하면 가독성이 좋아지겠지..
/* outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == 2 && j == 2) {
      break outer;
    }
    console.log(`[${i}, ${j}]`);
  }
}
console.log("done"); */

(function () {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`[${i}, ${j}]`);
      if (i == 2 && j == 2) {
        return;
      }
    }
  }
})();
console.log("done");

var hello = "hahahahahaaaaaaa";
var findChar = "h";
var count = 0; // 변수 hello에 저장된 값 중 findChar에 해당하는 문자를 찾아 인덱스를 증가시킨다.

for (let i = 0; i < hello.length; i++) {
  if (hello[i] != findChar) {
    continue;
  }
  count++; // hellohellohello문자열 중 h에 해당하는 경우만 동작하고, 나머지는 continue처리한다.
}

console.log(count);
