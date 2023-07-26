const title = document.querySelector("#title"); // id가 title인 요소를 가져온다.(제목 정보)
const author = document.querySelector("#author"); // id가 author인 요소를 가져온다.(저자 정보)
const saveBtn = document.querySelector("#save"); // id가 save인 요소를 가져온다.(저장 버튼)
const bookList = document.querySelector("#bookList"); // id가 bookList인 요소를 가져온다.(저장 => 정보가 표시될 대상)


saveBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 이벤트를 막는다.(폼 버튼 클릭시 서버로 보내지 않음)

    // bookList 요소에 제목, 저자 정보, 삭제버튼 추가
    const liItem = document.createElement("li"); // li 요소 생성
    
    liItem.innerHTML = `${title.value} - ${author.value} 
    <button class="delButton">삭제</button>`; // li 요소에 제목, 저자 정보, 삭제버튼 추가

    bookList.appendChild(liItem); // bookList 요소에 li 요소 추가

    title.value = ""; // 제목 입력창 초기화
    author.value = ""; // 저자 입력창 초기화

    // 삭제 버튼 클릭시 해당 요소 삭제
    const delButtons = document.querySelectorAll(".delButton"); // class가 delButton인 요소를 가져온다.
    for (let delButton of delButtons) {
        delButton.addEventListener("click", removeItem); // 삭제 버튼 클릭시 removeItem 함수 실행
    }
});

function removeItem() {
    const list = this.parentNode; // 삭제 버튼의 부모 요소를 가져온다.
    list.parentNode.removeChild(list); // 부모 요소의 자식 요소를 삭제한다.

    //this.parentNode.remove(this.parentNode);
}