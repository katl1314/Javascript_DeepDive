function myFunction(value) {
  return function (value2) {
    return value + value2;
  };
}

console.log(myFunction(1)(2));
