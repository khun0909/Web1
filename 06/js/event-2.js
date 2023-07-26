const btn = document.querySelector('#btn'); // 버튼 요소 가져오기
let word = document.querySelector('#word'); // input 요소 가져오기
let wordLen =0; // 문자열 길이 저장 변수 선언

// 버튼 클릭 이벤트
btn.addEventListener('click', function() {
    // 문자열 길이 계산
    wordLen = word.value.length;

    // result 영역에 계산결과 출력
    const resultClick = document.querySelector('#resultClick');
    resultClick.innerText = `버튼 클릭 : ${wordLen}`;
});

// input 요소의 값이 변경될 때 이벤트
word.onchange = function() {
    // 문자열 길이 계산
    wordLen = word.value.length;

    // result 영역에 계산결과 출력
    const resultChange = document.querySelector('#resultChange');
    resultChange.innerText = `글자 입력 : ${wordLen}`;
}