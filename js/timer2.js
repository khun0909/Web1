let cnt = 0;

//직접함수 호출방식
let timer = setInterval(() => {
    console.log('안녕하세요.');
    cnt++;   //인사말 표시 횟수 체크
    if(cnt === 5) {
        clearInterval(timer); //cnt가 5가 되면 타이머 중지
    }
}, 2000);



//다른 타이머 호출방식
// cnt = 0;
// function greeting() {
//     console.log("안녕하세요.");
//     cnt ++;
//     if (cnt ===5)
//     clearInterval(greeting);
// }
// setInterval(greeting, 2000);