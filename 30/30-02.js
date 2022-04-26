/**
 * Date 메서드
 * 1. Date.now() : 1970년 01월 01일 00시 00분 00초부터 현재 시간까지 밀리세컨드를 반환함.
 *
 * 2. Date.parse(datestring): 인자로 전달한 지정 시간까지의 밀리세컨드를 반환.
 *
 * 3. Date.UTC() : 1970년 1월 1일 00시 00분 00초부터 함수로 지정한 시간까지의 밀리세컨드를 반환함.
 */

// 1. Date.now() : 1970년 1월 1일 00시 00분 00초부터 현재 시간까지의 밀리초를 반환함.
console.log(`Date.now() : ${Date.now()}`);

// 전달받은 밀리초를 가지고 Date생성자 함수를 호출하여 Date객체를 가져오자.
console.log(new Date(Date.now()));

// 2. Date.parse(dateString): 1970년 1월 1일 00시 00분 00초부터 함수로 전달한 인자 까지 밀리초를 반환
console.log(
    Date.parse("2017/11/10 09:00:00"),
    new Date(Date.parse("2017/11/10 09:00:00")),
    new Date("2017/11/10 09:00:00")
);

// 3. Date.UTC(year, month, day, hour, minute?, second?, millisecond?)
// 함수로 전달한 일정 시간까지의 밀리세컨드를 반환.
// Date.parse와 다르게 년,월,일,시간 분 초를 입력받을 수 있음.
// 특히 month의 경우 0 ~ 11이니 주의해야함.

console.log(Date.UTC(2022, 3, 25), new Date(Date.UTC(2022, 3, 25))); // month 가 3이면 실제로는 4월을 의미함.

const now = new Date();
// Date.prototype.setFullYear(year) : 년도를 설정
now.setFullYear(2019);
// Date.prototype.getFullYear() : 년도를 반환
console.log(now.getFullYear(), now);

// Date.prototype.setMonth(month): Date객체의 월을 나타내는 0 ~ 11 정수를 설정함.
now.setMonth(0);

// Date.prototype.getMonth() : Date객체의 월을 반환함. 0 ~ 11의 정수를 반환.
console.log(now.getMonth(), now);

// Date.prototype.setDate(date) : Date객체의 날짜를 설정합니다.(1 ~ 31)
now.setDate(20);

// Date.prototype.getDate() : Date객체의 날짜를 반환합니다.
console.log(now.getMonth(), now);

// Date.prototype.getDay() : Date객체의 요일을 반환함. (0(일요일) ~ 6(토요일))
console.log(now.getDay());

/**
 * Date.prototype.setHours, getHours : Date객체의 시간을 설정 및 반환
 * setHours의 경우 함수 인자로 시간, 분, 초를 입력받을 수 있음.
 *
 * Date.prototype.setMinutes, getMinutes : Date객체의 분을 설정 및 반환 (설정 시 분, 초, 밀리초 인수로 전달)
 *
 * Date.prototype.setSeconds, getSeconds : Date객체의 초를 설정 및 반환
 *
 * Date.prototype.setMilliseconds, getMilliseconds : Date객체의 밀리초를 설정 및 반환함.
 */

// Date.prototype.getTime() : 1970년 00월 00일 00시 00분 00초 부터 Date객체의 시간까지의 밀리초를 반환함.
console.log(now.getTime()); // 1970-00-00 00:00:00 ~ 2019-01-20 22:31:xx

// Date.prototype.setTime(millisecond) : 함수의 인자로 밀리초를 설정하여 Date객체를 반환한다.
now.setTime(1547991000000);
console.log(now, now.toDateString());
/**
 * Date.prototype.toDateString() : Date객체의 날짜와 시간을 문자열로 반환함.
 */

console.log(now.toISOString()); // ISO 8601형식으로 Date객체의 날짜와 시간을 문자열로 표현함.

/**
 * Date.prototype.getLocaleString() : Date객체의 날짜와 시간을 로컬을 기준으로 문자열로 표시함.
 * 기본값은 현재 브라우저의 로컬이다.
 */

console.log(now.toLocaleDateString("ko-KR"));
console.log(now.toLocaleDateString("en-US"));
console.log(now.toLocaleDateString("ja-JP"));
