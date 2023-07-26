
// 이터레이터 : 문자열이나 배열과 같은 컬렉션을 순회하는 방법을 통일한 인터페이스
let arr = [10, 20, 30];
console.log('arr ', arr); // [ 10, 20, 30, 40, 50 ]

let iter = arr[Symbol.iterator]();
console.log('iter ', iter); // Object [Array Iterator] {}

console.log(iter.next()); // { value: 10, done: false }
console.log(iter.next()); // { value: 20, done: false }
console.log(iter.next()); 
console.log(iter.next()); 


// 제너레이터 : 이터레이터를 리턴하는 함수
function fnc() {
    console.log("1");
    console.log("2");
    console.log("3");
}

fnc() // 1 2 3

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let iter2 = gen();
console.log(iter2); // Object [Generator] {}

console.log(iter2.next()); // { value: 1, done: false }
console.log(iter2.next()); // { value: 2, done: false }
console.log(iter2.next()); // { value: 3, done: false }
console.log(iter2);        // Object [Generator] {}
console.log(iter2.next()); // { value: undefined, done: true }

console.log(iter2);


let g1 = gen();
g1.next();

for (const a of g1) {
    console.log(a);
}