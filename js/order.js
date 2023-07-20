//1. 전송 버튼을 클릭하면 각 항목의 입력여부를 검사한다.
//2. 입력이 안된 내용에 대해서 안내창 띄우기
//3. 입력이 안된 항목으로 포커스 이동

//1. 전송 버튼을 클릭하면 각 항목의 입력여부를 검사한다.
let order = document.querySelector(".order");

// //1번 방식
// function orderclick(){
//     if (document.order.product.value == "") {
//         alert("상품명을 입력하세요.");
//         document.order.product.focus();
//         exit; //함수 종료
//     }
// }
// order.addEventListener("click", orderclick)


//2번 방식
order.onclick = function () {
    //name을 이용한 값 입력 여부 확인
    console.log(document.order.product.value);
    if (document.order.product.value == "") {
        alert("상품명을 입력하세요.");
        document.order.product.focus();
        return;
    }
    console.log(document.order.prodnum.value);
    if (document.order.prodnum.value == "") {
        alert("상품명을 입력하세요.");
        document.order.prodnum.focus();
        return;
    }

    //id를 이용한 값 확인 여부
    console.log()
    if (document.querySelector("#order-name").value == ""){
        alert("주문자명을 입력하세요");
        document.querySelector('#order-name').focus();
        return;
    }
    if (document.querySelector("#order-tel").value == ""){
        alert("전화번호를 입력하세요");
        document.querySelector('#order-tel').focus();
        return;
    }
    if (document.querySelector("#order-addr").value == ""){
        alert("주소를 입력하세요");
        document.querySelector('#order-addr').focus();
        return;
    }
}















