const title = document.querySelector('#title'); //id가 title인 요소를 가져온다(제목 정보)
const author = document.querySelector('#author');//저자정보
const saveBtn = document.querySelector('#save'); //저장버튼
const bookList = document.querySelector('#bookList'); //저장 버튼 클릭시 정보가 표시될 영역

saveBtn.addEventListener("click", function (event) {   //클릭 이벤트가 발생하면,
    event.preventDefault(); //기본 이벤트를 막는다. (폼 버튼 클릭시 서버로 보내지 않는다.)

    //bookList 요소 추가 후 제목, 저자정보, 삭제 버튼을 추가한다.
    const liItem = document.createElement("li"); //li요소 생성
    liItem.innerHTML = `${title.value} - ${author.value}
    <button class="delButton">삭제</button>`; //li요소에 제목, 저자 정보 삭제버튼 추가

    bookList.appendChild(liItem); //booklist 요소에 li 요소 추가
    title.value = "";
    author.value = "";

    //삭제 버튼 클릭시 해당 요소 삭제
    const delButtons = document.querySelectorAll(".delButton");//class가 delButton인 요소를 가져온다.
    for (let delButton of delButtons) {
        delButton.addEventListener("click", removeItem); //삭제 버튼 클릭 시
    }
});


function removeItem(event){
    const list = this.parentNode; //삭제 버튼의 부모 요소를 가져온다.
    list.parentNode.removeChild(list); //부모 요소의 자식 요소를 삭제한다.
}



