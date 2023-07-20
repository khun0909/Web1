const factor = 5; //글로벌(전역)변수(상수) 선언

function calc() {
    return num + factor;   //num은 전역 변수가 아니므로 에러 발생

}
//console.log(calc());

const num = 10;  //지역변수 (상수))
let result = calc();   //지역변수 result 선언
document.write(`result : ${result} <br>`);
