const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        if (array.indexOf(currentValue) === currentIndex) {
            previousValue = previousValue.concat(currentValue);
        }
        return previousValue;
    },
    []
);
console.log(result);
