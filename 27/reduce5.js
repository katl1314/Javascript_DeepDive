const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 },
];

// reduce메서드를 이용하여 특정 프로퍼티 값을 합산해보자.
// reduce는 반드시 초기값을 설정해야함. initalizeValue를 필수
const price = products.reduce((prev, curr) => prev + curr.price, 0);

console.log(price);
