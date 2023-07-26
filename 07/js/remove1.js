// remove1.html에서 대상을 선택하여 삭제하는 방법

let items = document.querySelectorAll("li"); // li 태그 선택

for (let item of items) {
    item.addEventListener("click", function() {
        // this.parentNode.removeChild(this); // 클릭한 li 태그 삭제(부모 노드에서 자식 노드 삭제)
        // this는 이벤트가 발생한 객체를 의미

        this.remove(this); // 클릭한 li 태그 삭제
    });
};