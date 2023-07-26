
// 배열 구조 분해 할당 ======================================================
// 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식

const fruits = ['Apple', 'Banana', 'Cherry'];

// let Apple = fruits[0];
// let Banana = fruits[1];

let [Apple, Banana] = fruits;  // 배열의 첫번째, 두번째 값을 변수에 담음, 나머지는 무시됨
console.log(Apple, Banana);  // Apple Banana

// 나머지 변수를 이용한 분해 할당
let [Apple2, ...rest] = fruits; // 배열의 첫번째 값을 변수에 담음, 나머지는 rest 변수에 담음
console.log(Apple2, rest);  // Apple [ 'Banana', 'Cherry' ]


// 두 변수 값 교환하기
let num1 = 10;
let num2 = 20;
console.log(num1, num2);  // 10 20

// 값 교환
[num1, num2] = [num2, num1];
console.log(num1, num2);  // 20 10

// 객체 구조 분해 할당 ======================================================
// 객체의 속성(프로퍼티)을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
// 키 이름과 변수 이름을 동일하게 사용
const nembers = {
    name: '홍길동',
    age: 20,
}

let {name, age} = nembers;
console.log(name, age);  // 홍길동 20

// 키 이름과 변수 이름을 다르게 사용
let {name:myName, age:myAge} = nembers;
console.log(myName, myAge);  // 홍길동 20

// 중접된 객체 구소 분해 할당
const student = {
    name: '홍길동',
    age: 20,
    scores: {
        korean: 90,
        math: 80,
        history: 100
    },
    friends: ['철수', '영희', '순이']
}

let {name:Name, scores:{korean,history}, friends:[f1, f2, f3]} = student;

console.log(Name, history, f1);  // 홍길동 100 철수