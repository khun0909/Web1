//Return을 이용한 함수 정의
function calcSum3(s, n){
    var sum = 0;
    for(var i = s; i <= n; i++){
        sum+=i;
    }
    return sum;
}

// default parameter 매개변수가 미리 정의된 함수
function calcSum4(s=1, n=100){
    var sum = 0;
    for(var i = s; i <= n; i++){
        sum+=i;
    }
    return sum;
}

var strNum = parseInt(prompt("시작값을 입력하세요."));
var endNum = parseInt(prompt("종료값을 입력하세요."));
var result = calcSum3(strNum, endNum);

console.log(`${strNum}부터 ${endNum}까지의 합계는 ${calcSum3(strNum, endNum)}입니다.`);  //함수 자체를 불러오기 가능
document.write(`${strNum}부터 ${endNum}까지의 합계는 ${result}입니다.`);    

result = calcSum4(); //매개변수 기본값 설정됨
console.log(`calcSum4 함수 실행결과: ${result} 입니다.`);