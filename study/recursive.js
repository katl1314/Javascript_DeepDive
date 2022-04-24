/**
 * 재귀 함수 : 반복되는 처리를 위해 사용함.
 */

function betweenSum(n, m) {
  var sum = 0;
  sum += n++;

  if (n <= m) {
    sum += betweenSum(n, m); // 재귀 함수
  }

  return sum;
}

console.log(betweenSum(1, 10));

/**
 * 펙토리얼 재귀함수로 구현해 보자.
 * 반드시 재귀함수는 탈출 조건이 있어야 함.
 */

function factorial(n) {
  // 탈출 조건 : n이 1일때 재귀 호출을 멈춘다.
  if (n < 2) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 1 X 2 = 2
console.log(factorial(3)); // 3! = 1 X 2 X 3 = 6
console.log(factorial(4)); // 4! = 1 X 2 X 3 X 4 = 24;
console.log(factorial(5)); // 5! = 1 X 2 X 3 X 4 X 5 = 120;

// 재귀함수는 무한루프에 빠질 수 있다는 단점(오버플로 에러) 주의해야함.
// 재귀함수 사용시 직관적으로 이해하기 쉬울때만 사용한다.
function factorial2(n) {
  if (n <= 1) return 1;
  var num = n;

  while (--n) {
    num *= n;
  }
  return num;
}

console.log(factorial2(5));

// 중첩 함수
// 외부 함수 내 내부 함수가 있는 형태
// 중첩 함수는 내부 함수 내에서 호출할 수 있다.

// 외부 함수
function outer() {
  var i = 10;
  function inner() {
    // 중첩 함수
    // 외부 함수 몸통에서 중첩함수를 실행한다.
    var j = 20;
    console.log(i + j);
  }

  inner();
}

outer();

// 콜백함수
// 함수의 매개변수로 함수를 전달하여 해당 함수에서 원하는 시점에 콜백함수를 호출한다.
// 함수의 매개변수에 콜백함수를 전달받은 함수는 고차함수가 됨.

// 어떤 일을 반복하는 함수를 정의함.
// 고차함수
function repeat(callback, n) {
  for (var i = 0; i < n; i++) {
    callback(i);
  }
}

repeat((i) => {
  if (i % 2) {
    // 홀수일때 console.log
    console.log(i);
  }
}, 10);

repeat((i) => {
  if (!(i % 2)) {
    // 짝수일때 console.log
    console.log(i);
  }
}, 10);
