const today = new Date();
console.log(today);
console.log(today.toDateString()); 

// ********** 날짜와 요일 출력 *************** //
const dspDate = document.querySelector('#today');

const year = today.getFullYear();    // 연도 추출
const month = today.getMonth() + 1;  // 월 추출(0 ~ 11) + 1
const date = today.getDate();        // 일 추출
const day = today.getDay();          // 요일 추출(0 ~ 6)

// 정확한 요일값 계산
// const week = ['일', '월', '화', '수', '목', '금', '토'];
// console.log(week[day]+'요일');
// dspDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold>${week2}</span>`;

// switch문으로 요일 계산
let week2;  // 요일을 저장할 변수
switch(day) {
    case 0: week2 = '일요일'; break;
    case 1: week2 = '월요일'; break;
    case 2: week2 = '화요일'; break;
    case 3: week2 = '수요일'; break;
    case 4: week2 = '목요일'; break;
    case 5: week2 = '금요일'; break;
    case 6: week2 = '토요일'; break;
    case 7: week2 = '일요일'; break;
}

dspDate.innerHTML = `${year}년 ${month}월 ${date}일 <span>${week2}</span>`;
// span 태그 추가를 위해 innerHTML 사용



// ********** 시간 출력 *************** //
const dspTime = document.querySelector('#clock'); 

// 시간을 계속해서 출력하기 위한 함수 작성
let clock = function() {
    
    let currentTime = new Date();   // 현재 시간을 계속해서 받아옴
    let hour = currentTime.getHours();     // 시간 추출
    let min = currentTime.getMinutes();    // 분 추출
    let sec = currentTime.getSeconds();    // 초 추출

    // console.log(`${hour} : ${min} : ${sec}`);

    // 12시간 형식으로 출력
    let period = "AM";  // 오전, 오후 구분
    if(hour === 0) {  //  자정
        hour = 12;
    } else if(hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    // 시간 자리수 통일(00:00:00)
    hour = (hour < 10) ? "0" + hour : hour; // 1자리 숫자일 경우 앞에 0을 붙여줌
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    dspTime.innerText = `${period} ${hour} : ${min} : ${sec}`;
    // 시간값만 출력하기 위해 innerText 사용
}

setInterval(clock, 1000);