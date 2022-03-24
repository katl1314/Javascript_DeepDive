/* eslint-disable no-fallthrough */
/**
 * 제어문은 : 조건에 따라 코드 블록을 실행하거나(조건문), 반복 실행할때 사용함(반복문)
 *  - 조건문
 *  - 반복문
 *
 * 블록문 : 0개이상의 문으로 구성되어 있을 때 중괄호를 이용하여 묶는다.
 * 단독으로 사용이 가능하나, 기본적으로 제어문과 함수를 사용할때 이용한다.
 * {
 *  // 블록문
 * }
 */

var num = 2;

/**
 * 변수 num이 2면 true이므로 좌항을 실행하게 되고, 좌항의 조건이 일치(num은 0보다 크다)이니 변수 kind에는 값 "양수"가 할당되겠군.
 */
var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind);

var month = 11;
var monthName = "";

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = "March";
  case 4:
    monthName = "April";
  case 5:
    monthName = "May";
  case 6:
    monthName = "June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = "October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "Invalid month";
}

// switch문의 각 case에 break를 걸지 않으면 가장 마지막 항목의 값으로 재할당.
console.log(monthName); // Invalid month

// 아래 예제는 break를 걸었을때 어떻게 반환되는지 확인해보자.
switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
    break;
}

console.log(monthName); // November
// case 11를 실행하면 변수 monthName에 November를 할당하고, break를 타기 때문에 아래 case에 재할당되지 않는다.

// 8-9 예제
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    /**
     * 윤년 기준
     * - 연도가 4로 나누어떨어지거나, 100으로 나누어떨어지지 않는 해
     * - 연도가 400으로 나누어떨어지는 해
     */
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    days = "Invalid month"; // 마지막 default는 break생략 가능.
}

console.log(days);
