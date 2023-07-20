//콜백

const bttn = document.querySelector('button');//버튼 요소를 가져온다.

function display() {
    alert('버튼을 클릭했습니다.(콜백 기본 함수)');
}

bttn.addEventListener('click', display); //1. 버튼을 클릭하면 display 함수를 호출함.



//2. 익명함수로 콜백함수를 전달하는 방법
bttn.addEventListener('click', () => {alert('버튼을 클릭했습니다(익명함수(화살표))')});

