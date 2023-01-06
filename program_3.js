//입력받기
const dollar = Number(prompt("환전 할 달러 금액을 입력하시오.", "$:"));

//처리하기 현시점의 환율은 1달러 = 1207원
const Won = dollar * 1207;

//출력하기
alert(`환전 금액:${Won}`);
