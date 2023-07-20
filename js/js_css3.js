//css변경 기본 : title 요소의 글자색, 배경색 변경

const title = document.querySelector("#title"); //타이틀 객체 가져오는 전역변수


title.onclick = function() {
    console.log(title.classList.contains("blue-italic"));

    if(!title.classList.contains("blue-italic")){ //클래스가 없으면,
        title.classList.add("blue-italic");        //클래스 추가
    }else {                                   //클래스 있으면
        title.classList.remove("blue-italic");    //클래스 제거
    }
}


//이미지 클릭 시 타이틀 클래스 추가/제거
const img = document.querySelector("#profile img");//이미지 객체 가져오는 전역변수

img.onclick = function() {
    title.classList.toggle("blue-italic");   //토글 이용
}













