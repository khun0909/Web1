const selectMenu = document.querySelector('#major');
console.log(selectMenu.selectedIndex);

selectMenu.onchange = function() {   //select 태그의 값이 변경되면
    //선택된 option 태그의 value값
    console.log(selectMenu.selectedIndex);
    let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
}

//라디오 버튼 접근
console.log(document.testForm.subject);

const radio = document.getElementsByName("inpur[name='subject']:checked");
console.log(radio);

radio.onclick = function(){
    console.log(radio.selectedIndex);
    //alert(radio.value + "을 선택하셨습니다.");

}