// 지역/전역 변수 
// 전역변수는 어디서든 사용 가능
//지역변수는 선언된 함수 내에서만 사용가능

var globaFs = 10; //전역변수

function sum(){
    var localFs = 10;  //지역변수
    var result = localFs + globaFs;

    console.log(`함수 내부에서 출력: ${result}, ${localFs}, ${globaFs}`);
}

sum();
console.log(`함수 외부에서 출력: ${result}, ${localFs}, ${globaFs}`);
//함수 내부에서 선언한 변수는 밖에서 사용못한다.
//에러발생
