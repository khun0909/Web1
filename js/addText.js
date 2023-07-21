const orderInfo = document.querySelector('#orderInfo');  // 주문내역 출력 div
const orderBtn = document.querySelector('#order');  // 주문 버튼 
const h2_Title = document.querySelector('#container > h2');  // 책 제목 요소(h2요소) 

//주문하기 버튼 클릭 이벤트
orderBtn.addEventListener('click', function(){
    let newP = document.createElement('p');   //p 요소 생성 
    let newText = document.createTextNode(h2_Title.innerText); //책 제목 내용을 가져와 텍스트 노드 생성

    newP.appendChild(newText);   //p 요소에 텍스트 노드 추가
    newP.style.color='blue';     //p요소에 글자 색상을 파란색 추가
    newP.style.fontSize = '1.8em'   //p요소에 글자 크기 
    orderInfo.appendChild(newP);//주문내역에 p요소추가 
}, {once: true}); //항목이 하나만 나오게