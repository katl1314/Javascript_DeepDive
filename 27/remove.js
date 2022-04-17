const array = [1, 2, 3, 1, 2];

// 배열 array에서 두번째 인자를 검색하고 중복 요소가 있는 경우 첫번째 요소만 삭제함.
function remove(items, value) {
    // 배열 내 요소의 인덱스를 반환함.(중복된 요소는 무시한다.)
    const index = items.indexOf(value);
    // 배열 내 존재하면 요소를 삭제함.
    index != -1 && items.splice(index, 1);

    return items;
}
console.log(remove(array, 2));
console.log(remove(array, 10));
