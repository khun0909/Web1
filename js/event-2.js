const btn = document.querySelector('#btn');  //버튼요소 가져옴
let word = document.querySelector('#word');  //input요소 가져옴

//버튼 클릭 이벤트
btn.addEventListener('click', function(){
    //input값 가져오기

    //문자열 길이 계산
    let wordLen = word.value.length;

    //result 영역에 계산결과 출력
    const resultClick = document.querySelector('#resultClick');
    resultClick.innerText = `버튼 클릭 : ${wordLen}`;
});

//input요소의 값이 변경될때 이벤트
word.onchange = function(){
    //input값 가져오기

    //문자열 길이 계산
    let wordLen = word.value.length;

    //result 영역에 계산결과 출력
    const resultChange = document.querySelector('#resultChange');
    resultChange.innerText = `글자 입력 : ${wordLen}`;


}