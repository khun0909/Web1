
// 입력된 데이터 형식에 따른 속성과 메소드

var str = prompt("문자열을 입력하세요", "");
console.log("입력한 문자열 : " + str);

console.log("입력한 문자열의 길이 : " + str.length);  // 문자열 객체에 대한 length 프로퍼티
console.log("특정 위치값의 글자 : " + str.charAt(3));  // 문자열에서 특장 위치의 글자를 반환하는 메소드
console.log("특정 위치값의 글자 : " + str[3]);  // 문자열에서 특장 위치의 글자를 반환하는 메소드
console.log("특정 글자의 위치값 출력: : " + str.indexOf('요'));  // 문자열에서 특장 글자의 위치값을 반환하는 메소드

// 문자열에서 특정 글자가 몇개이며 위치는 어디인지 반환하는 함수

function searchChar(str, char) {
    let count = 0;  // 특정 글자의 개수를 저장할 변수
    let pos = new Array();  // 특정 글자의 위치값을 저장할 배열

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1
            pos.push(i);
        }
    }

    // return [count, pos];  // 배열로 반환
    return {tcnt:count, tpos:pos};  // 객체로 반환
}

const strText = prompt("문장을 입력하세요", "");
const charText = prompt("찾을 문자를 입력하세요.", "");

// let [count, pos] = searchChar(strText, charText);
// console.log("찾는 문자의 개수 : " + count);
// console.log("찾는 문자의 위치 : " + pos);

let result = searchChar(strText, charText);
console.log("찾는 문자의 개수 : " + result.tcnt);
console.log("찾는 문자의 위치 : " + result.tpos);

