(function printNow() {
    const today = new Date();
    const week = [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토",
    ];

    const year = today.getFullYear(); // Date객체의 연도를 반환함.
    const month = today.getMonth() + 1; // Date객체의 월을 반환함. (0 ~ 11)
    const date = today.getDate(); // Date객체의 날짜를 반환함 (1 ~ 31)
    const day = week[today.getDay()]; // Date객체의 요일값(0 ~ 6)을 반환함.
    
    let hour = today.getHours(); // Date객체의 시간을 반환함.
    let minute = today.getMinutes(); // Date객체의 분을 반환함.
    let second = today.getSeconds(); // Date객체의 초를 반환함.
    const ampm = hour > 12 ? "PM" : "AM";
    
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    // hour가 13 ~ 22
    hour = hour % 12;
    hour = hour || 0;

    console.log(`${year}/${month}/${date} (${day}요일), ${ampm} ${hour}시 ${minute}분 ${second}초`);
    setTimeout(printNow, 1000); // 1초당 한번씩 함수를 호출함.
}());
