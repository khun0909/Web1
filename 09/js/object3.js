let obj1 = 100;  // 원시 데이터 타입

let obj2 = {     // 참조 데이터 타입
    coolo : "blue",
    width :30,
    height : 50,
}

let obj3 = obj1
let obj4 = obj2
console.log(obj3, obj4);

obj3 = 400
console.log(obj1, obj3);

obj4.width = 100
console.log(obj2, obj4);