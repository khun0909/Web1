var name1 = prompt("환영합니다. 이름을 입력해주세요."); //입력창 출력
document.write("<b><big>" + name1 + "</big></b>님, 환영합니다.") //화면에 출력









function showPrice(){
    // var originPrice = 10000; //원금
    // var dcRate = 20;
    var originPrice = document.querySelector("#oPrice").value;
    var dcRate = document.querySelector("#dcRate").value;

    var savedPrice = originPrice * (dcRate / 100); //할인 금액
    var resultPrice = originPrice - savedPrice; //할인 후 가격

    document.querySelector("#showResult").innerHTML = "상품 원가는 <span>"
    + originPrice + "원</span> 이고, 할인율은" + dcRate + "% 입니다.<br>"
    + "할인 금액은 " + savedPrice + "원이고, 할인 후 가격은 <span>" + resultPrice + "원</span> 입니다.";
}