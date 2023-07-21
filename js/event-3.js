const body = document.querySelector('body');
const pTag = document.querySelector('p');

body.addEventListener('click', function(event){
    if (event.altKey) {
        pTag.style.display = 'flex';
        let altkey = "알트키 눌림";
        pTag.innerText = `마우스 위치 좌표: ${event.pageX}, ${event.pageY}\n ${altkey}`;
    }else{
        pTag.style.display = 'none';
    }
});
















