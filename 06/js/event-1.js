
//////////////////
// 윈도우 이벤트 //
//////////////////
window.onload = alert("안녕하세요!"); // 문서 로딩이 완료되면 실행

//////////////////
// 마우스 이벤트 //
//////////////////
const btns = document.querySelectorAll("button"); // 버튼 요소 가져오기, dicument.getElementsByTagName("button")과 동일

// 버튼 클릭 시 배경색을 green으로 변경\
// btn.onclick = () => document.body.style.backgroundColor = "green"; 

btns[0].onclick = function() { 
    document.body.style.backgroundColor = "green";
}

btns[1].onclick = function() { 
    document.body.style.backgroundColor = "white";
}

//////////////////
// 키보드 이벤트 //
/////////////////

// 이벤트 영역 설정
const body = document.body;

// 키보드 이벤트 발생시 result 클래스에 키보드 이벤트 정보 출력

const result = document.querySelector("#result");

// body.onkeydown = function(event) {
//     result.innerText = `code : ${event.code},\n
//                         key : ${event.key}`;
// }
body.addEventListener("keydown", (event) => {
    result.innerText = `code : ${event.code},\n
                        key : ${event.key}`;
});
