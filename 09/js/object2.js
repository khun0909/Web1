let student ={
    name: "홍길동",  // 객체 내부의 변수를 프로퍼티라고 부른다.(속성)
    age: 20,
    score : {
        math: 80,  // 객체 내부의 변수를 프로퍼티라고 부른다.(속성)
        science: 90,
        history : 75,
        average : function(){  // 객체 내부의 함수는 메소드라고 부른다.
               return (this.math + this.science + this.history) / 3;
            // average() { 
            //     return (this.math + this.science + this.history) / 3;
            // }
        }
    }
}

console.log(student.name);
console.log(student.score.history);
console.log(student.score.average());