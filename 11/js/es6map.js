
// map() =======================================
// 배열 요소에 똑같은 함수를 실행후 결과를 새로운 배열로 반환
let numbers =[1,2,3,4,5];

var newNnumbers = numbers * 2;
console.log(newNnumbers); // NaN

var newNnumbers = [];
for (var i = 0; i < numbers.length; i++) {
    newNnumbers.push(numbers[i] * 2);
}
console.log(newNnumbers); // [2, 4, 6, 8, 10]

// map() 함수 사용
var newNnumbers = numbers.map(number => number * 2);
console.log(newNnumbers); // [2, 4, 6, 8, 10]

// map(f(값, 인덱스)) /  map(f(값, 인덱스, 배열)) 함수 사용
var newNnumbers = numbers.map((number, index) => number * 2 + index);
console.log(newNnumbers); // [2, 5, 8, 11, 14]

// filter() =======================================
// 특정 조건에 맞는 요소만 추출하여 새로운 배열로 반환
let scores = [82, 75, 48, 64, 36];

var newScores = scores.filter(score => score >= 60); // 60점 이상인 요소만 추출
console.log(newScores); // [82, 75, 64]

// filter(f(값, 인덱스)) /  filter(f(값, 인덱스, 배열)) 함수 사용
var newScores = scores.filter((score, index) => {
    if (score >= 60) {
        console.log(`index: ${index}, score: ${score}`);
        return score;
    }
});
console.log(newScores); // [82, 75, 64]


// reduce() =======================================
// 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환
let values = [1, 2, 3, 4, 5];
let result = values.reduce((tot, cur) => tot + cur, 0);
console.log(result); // 15


// Map().set() =======================================
var bag = new Map();
bag.set('wallet', 2000);

console.log(bag); 

// 
var bag = new Map([
    ['wallet', 2000],
    ['bag', 10000],
    ['card', 5000]
]);

console.log(bag);

// Map() 객체를 이용한 객체 생성
var bag = new Map();
bag.set('type', 'mini');
bag.set('item', 'wallet'); 

// bag.set('type', 'mini').bag.set('item', 'wallet');

// 기타 메서드(size, get(키), has(대상키), delete(대상키), clear())

console.log(bag.size); // 2
console.log(bag.get('type')); // mini
console.log(bag.get('name')); // mini

console.log(bag.has('item')); // true
console.log(bag.has('name')); // false

console.log(bag.keys()); // MapIterator {"type"}
console.log(bag.values()); // MapIterator {"mini"}
console.log(bag.entries()); // MapIterator {"type" => "mini"}
console.log(bag.delete('item')); // true
console.log(bag); // Map(1) {"type" => "mini"}