//사용자에게 원의 반지를을 입력받아 원의 넓이와 둘레를 구하는 프로그램
// 숫자 입력 받기
const num1 = Number(prompt("반지름을 입력하세요.", "R= "));

//처리
const sol_1 = 3.14 * num1 * num1;
const sol_2 = 2 * 3.14 * num1;
// 출력하기
alert(`원의 반지름:${num1}`);
alert(`원의 넓이:${sol_1}`);
alert(`원의 둘레:${sol_2}`);
