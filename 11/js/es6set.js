// 배열: 키 없이 여러개의 값만을 나열한 것(중복가능)
// Set(): 키 없이 여러개의 값을 배열 처럼 나열하나 중복되지 않는 유일한 값들로 구성(중복불가)

let numSet1 = new Set(); // 빈 Set 객체 생성
numSet1.add(10); // Set 객체에 add() 메서드로 값 추가
numSet1.add(20);
numSet1.add(10); // 중복된 값은 하나만 유지

console.log("numSet1 ", numSet1); // Set { 10, 20 }

let numSet2 = new Set();
numSet2.add(10).add(20).add(30).add(40).add(50); // 체인으로 값 추가

console.log('numSet2 ', numSet2); // Set { 10, 20, 30, 40, 50 }

let numSet3 = new Set([10, 20, 30, 40, 50]); // Set 객체 생성과 동시에 초기화
console.log('numSet3 ', numSet3); // Set { 10, 20, 30, 40, 50 }

let numSet4 = new Set([10,20,10,30,10,20,40, 50]); // 중복된 값은 하나만 유지
console.log('numSet4 ', numSet4); // Set { 10, 20, 30, 40, 50 }

// Set() 객체를 이용한 이터러블 객체 생성
let languages = new Set(['C', 'C++', 'Java', 'Python', 'Python']);
console.log('languages ', languages); // Set { 'C', 'C++', 'Java', 'Python' }

for (let lang of languages) {
    console.log(lang); // C C++ Java Python
}

console.log('languages.size ', languages.size); // 4
console.log('languages.values() ', languages.values()); // [Set Iterator] { 'C', 'C++', 'Java', 'Python' }