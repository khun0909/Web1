//remove1.html 에서 대상을 클릭 시 삭제 방법

let items = document.querySelectorAll("li"); //li 태그 선택

for (let item of items) {
    item.addEventListener("click", function () {
        this.parentNode.removeChild(this); //클릭한 li 태그 삭제

        //this.remove(this);  //클릭한 노드 삭제
    });
};

