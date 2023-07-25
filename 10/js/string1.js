//입력한 텍스트 길이 체크

var str = prompt("문자열을 입력하세요.","");
console.log("입력한 문자열 : " + str);

console.log("입력한 문자열의 길이 : " + str.length); //문자열 객체에 대한 length 프로퍼티
console.log("특정 위치값의 글자 : " + str.charAt(3)); //문자 객체에 대한 메소드
console.log("특정 위치값의 글자 : " + str[4]); //문자열에서 특정 위치의 글자를 반환
console.log("특정 글자의 위치값 출력 : " + str.indexOf('요')); //문자열에서 특정 글자의 위치값을 반환

//문자열에서 특정 글자가 몇개이며 위치는 어디인지 반환하는 함수
function searchChar(str, char){
    let count = 0; //특정 문자의 개수를 저장할 변수 
    let pos = new Array();  //특정 글자의 위치값을 저장할 배열
    
    for (let i = 0; i < str.length;){
        if(str===char){
            count += 1;
            pos.push(i);
        }
    }
    return count, pos;

}

const strText = prompt("문장을 입력하세요.", "");
const charText = prompt("찾을 문자를 입력하세요.", "");

let count, pos;
count, pos = searchChar(strText, charText);

console.log("찾는 문자의 개수 :" + count);
console.log("찾는 문자의 위치 :" + pos);



