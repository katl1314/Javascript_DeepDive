function hello() {
  console.log("유사 배열 객체", arguments);
  console.log(Array.prototype.slice.call(arguments));
  console.log(Array.prototype.join.call(arguments));
  // join, slice, concat을 이용하여 유사 배열 객체를 처리한다.
  console.log(Array.prototype.concat.call(arguments));
  console.log(Array.from(arguments));
}

hello(1, 2, 3, 4, 5, 6, 7);
