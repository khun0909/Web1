// 창이 활성화되면 팝업창을 띄우는 함수
// window.open("notice.html", "", "width=600, height=500")

function openPopup() {
    let left =(screen.availWidth -popWidth) /2; // (화면 너이 - 파업창 너미) / 2
    let top = (screen.availHeight - popHeight) /2; // (화면 높이 - 팝업창 높이) / 2

    window.open("notice.html", "이벤트 팝업", `width=${popWidth} height=${popHeight} left=${left} top=${top}`)
}

// document.querySelector("button").onclick = openPopup;

const btn = document.querySelector("button");
const popWidth = 600;
const popHeight = 500;

btn.addEventListener("click", openPopup);