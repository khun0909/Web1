//////////////////
// 폼 이벤트     //
//////////////////

const sltMenu = document.querySelector('#major');

function changeMajor() {
    let sltMenuText = sltMenu.options[sltMenu.selectedIndex].innerText;
    alert(sltMenuText + "을 선택하셨습니다.");
}

// sltMenu.onchange = changeMajor;
sltMenu.addEventListener('change', changeMajor);
