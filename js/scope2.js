var globaFs = 10; //전역변수
var localFs;

function sum(){
    var localFs = 10;
    result = localFs + globaFs;   //result var 생략, 전역변수로 선언됨

    console.log(`함수 내부에서 출력: ${result}, ${localFs}, ${globaFs}`);

    return localFs;
}

var lfs = sum();
console.log(`함수 외부에서 출력: ${result}, ${lFs}, ${globaFs}`);

