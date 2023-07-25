
// 1. 사용자로부터 문장을 입력받아 변수에 저장한다.
// 2. 사용자로부터 찾을 문자(단어)를 입력받아 변수에 저장한다.
// 3. 입력받은 문장에서 입력받은 문자(단어)가 몇개이며 위치는 어디인지 반환하는 함수를 작성한다.

// substring(시작위치, 종료위치) : 시작위치부터 종료위치(값미포함)까지의 문자열을 반환


// **************************************       
function countChar(string, chr) {
    var cnt = 0;
    var pos = new Array();
    var len = chr.length;

    for (var i = 0; i < string.length - len + 1; i++) {
        if (string.substring(i, len + i) == chr) {
            cnt++;
            pos.push(i);
        }
    }
    return [cnt, pos];
}

var string = "가나가나다라마바가나다마바사아가나";
var chr = "가나다";

let result = countChar(string, chr);
console.log(result[0]);
console.log(result[1]);   // result[개수, [위치값1, 위치값2, ...]]