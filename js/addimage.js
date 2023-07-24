let btn = document.querySelector('button'); //버튼 객체의 요소를 가져옴

btn.addEventListener('click', function() {    //버튼 클릭 시
    let newImg = document.createElement('img');   //img 요소 생성
    let srcNode = document.createAttribute('src');   //src 속성 생성 

    srcNode.value = './images/book.png'; //src속성값 지정 (이미지 경로)
    newImg.setAttributeNode(srcNode); //img요소에 src속성 추가
    document.body.appendChild(newImg);//body요소에 img 요소 추가
});