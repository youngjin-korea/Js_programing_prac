/*프로그램 (program= pro[미리]+gram[작성된것]): 미리작성 한 것을 프로그램이라고 한다.
  컴퓨터 공학에서 프로그램이란, 입력 -> 처리 -> 출력 과정을 미리 적어둔 것*/

//사용자에게 숫자를 입력 받아 cm 를 inch로 변환하여 출력하는 프로그램
//입력: prompt() inch 단위 숫자
const input = Number(prompt("inch 단위의 숫자를 입력해주세요"));
//처리: 1inch -> 2.54cm
const output = input * 2.54;
//출력: cm 단위의 숫자
alert(`${input}inch = ${output}cm 입니다.`);
