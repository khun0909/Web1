const sltMenu = document.querySelector('#major');

function changeMajor(){
    let sltMenuText = sltMenu.opions[sltMenu.selectedIndex].innerText;
    alert(sltMenuText+"을 선택하셨습니다.");
}

sltMenu.onchange = changeMajor;

