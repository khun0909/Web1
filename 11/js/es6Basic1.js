// 매개변수 기본 값 설정
function sum(x, y = 1) {
    return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 2

// 가변형 매개변수(나머지 매개변수: ...변수명) ========================
function addNum(...numbers) {
    console.log(numbers); 
    let result = 0;
    for (let number of numbers) {
        result += number;
    }

    return result;
}
console.log(addNum(1, 2)); // 3
console.log(addNum(1, 2, 3, 4, 5)); // 15


// 배열 전개 연산자(concat) ======================================
var arr1 = [1, 2, 3];  // 추천: let arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

console.log(arr1.concat(arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([...arr1, ...arr2, ...arr3]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 전개구문을 이용한 배열 복사 ======================================
var arr1 = [1, 2, 3];

var arr2 = arr1; // 얕은 복사(주소 복사)
arr2[1] = 100;
console.log(arr1, arr2); // [1, 100, 3] [1, 100, 3]

var arr3 = [...arr1]; // 깊은 복사(값 복사)
arr3[1] = 200;
console.log(arr1, arr3); // [1, 100, 3] [1, 200, 3]

// 객체 속성 ================================================
var obj1 = { one: 1, two: 2, three: 3 };

obj1.four = 4;
console.log(obj1); // { one: 1, two: 2, three: 3, four: 4 }

// 객체 속성 추가(기존)
// obj1.public Data = true;  // SyntaxError: Unexpected identifier

// 객체 소성 추가(ES6)
obj1['public Data'] = true;
console.log(obj1); // { one: 1, two: 2, three: 3, four: 4, 'public Data': true }

console.log(obj1['public Data']); // true

// 계산된 프로퍼티(속성) 이름(ES6) ======================================
function fn() {
    return 'result';
}

function add(a, b) {
    return a + b;
}

var obj1 = {
    [fn()] : "함수 키"   // 계산된 프로퍼티 이름: 함수 결과가 키로 사용됨
}

console.log(obj1); // { result: '함수 키' }

var obj2 = {
    [fn()] : '함수 키',
    [`${add(1, 2)} Key`] : '계산된 키'
}

console.log(obj2); // { result: '함수 키', '3 Key': '계산된 키' }

// 객체 속성 점 표기법 ================================================
var obj1 = {
    one: 1,
    two: 2,
}

obj1.three = 3;

console.log(obj1); // { one: 1, two: 2, three: 3 }

// 객체 매개변수를 Key로 사용 ================================================
function makeUser(name, age)  {
    return {
        name, // name: name
        age, // age: age
    }
}

console.log(makeUser('홍길동', 20)); // { name: '홍길동', age: 20 }

// 객체에서 심벌키 사용 ================================================

// JavaScript는 총 6개의 원시 타입(number, string, boolean, null, undefined, symbol)과 
// 1개의 객체 타입(object)을 가지고 있다.
// 심벌은 객체의 고유한 식별자를 만들 때 사용한다.
// 일반적으로 심볼 타입은 객체의 프로퍼티 키를 고유하게 설정함으로써 프로퍼티 키의 충돌을 방지하기 위해 사용

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 == id2, id1 == id1); // false true

// 심벌은 문자열과 연결되어 사용될 수 있다.
let id = Symbol('id');
let tel = Symbol('tel');
let tel2 = Symbol('tel');

console.log(id == tel, tel == tel2); // false false

// 심벌은 객체의 프로퍼티 키로 사용될 수 있다.
let user = {
    name: '홍길동',
    age: 20,
    [id]: 'hong',
    [tel]: function() {
        let t = prompt('전화번호를 입력하세요.');
        return t;
    }
}

console.log(user); // { name: '홍길동', age: 20, [Symbol(id)]: 'hong', [Symbol(tel)]: [Function] }
for(let key in user) {
    console.log(`${key} : ${user[key]}`); // Symbol로 저장된 값은 for문에서 출력되지 않는다.
}
// 심벌은 숨김 프로퍼티로 사용될 수 있다.
console.log(user[id]); // hong
console.log(user[tel]()); // 전화번호를 입력하세요.

// 심벌은 전역 심벌 레지스트리에 저장되어 한번 만들어진 심벌은 다시 사용된다.
let tel1 = Symbol.for('tel'); // 전역 심벌 레지스트리에 저장(처음 만들어진 심벌)
let phone = Symbol.for('tel'); // tel 이라는 심벌이 있으므로 가져와 사용

console.log(tel1 == phone); // true

// 전역 심벌 레지스트리에 저장된 심벌은 Symbol.keyFor() 메소드를 사용하여 확인할 수 있다.
// 앞에서 만드 phone 변수에 활당된 전역 심벌을 가져와 출력
console.log(Symbol.keyFor(phone)); // tel