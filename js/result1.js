//매개변수가 두개인 함수
function addNum(a,b) {
    return a + b;
}
console.log(addNum(1, 2));   //3
console.log(addNum(1, 2, 5, 10));   //3

//모두 받아서 배열로 만들기(인수의 개수에 상관없이 모두 받아서 처리할 수 있다.)
function sumAll(...number){
    let sum = 0;
    for (let num of number){
        sum += num;
    }
    return sum;
}

console.log('...매개변수 사용');
console.log(sumAll(1,2,3,4,5));
console.log(sumAll(1,2,3,4,56,7,8,9,10));
//첫번째는 변수1 나머지는 변수2로 받는다.

function showName(firstName, ...lastName){
    let str = '내가 가장 좋아하는 과일은' + firstName + '이고, 나머지는'
     + lastName + '입니다.';
     return str;
}

console.log(showName('사과','포도','복숭아','수박'));


