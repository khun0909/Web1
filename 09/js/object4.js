let bag = {
    type:"backpack",
    color: "blue",
    size: 15,
}

console.log(bag.type); // type 속성에 접근 / bag['type']
console.log(Object.keys(bag)); // bag 객체의 속성명을 배열로 반환

// 객체의 속성명를 이용해 값 접근
for (key in bag) {
    console.log(key, bag[key]);
}  

console.log(Object.values(bag)); // bag 객체의 속성값을 배열로 반환
console.log(Object.entries(bag)); // bag 객체의 키와 속성값을 배열로 반환

console.log("*********************************************")
// ***** 속성과 메서드를 가진 객체 ***** //
let book ={
    title: "자바스크립트",  // 속성
    pages: 553,            // 속성

    // buy : function() {     // 메서드
    //     console.log("책을 구입했니다.");
    // }
    
    buy() {     // 메서드
        console.log("책을 구입했니다.");
    }
}

let keys = Object.keys(book); // book 객체의 속성명을 배열로 반환
let values = Object.values(book); // book 객체의 속성값을 배열로 반환
let entries = Object.entries(book); // book 객체의 키와 속성값을 배열로 반환

console.log(keys);
console.log(values);
console.log(entries);
