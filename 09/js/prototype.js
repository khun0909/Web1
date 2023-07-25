let arr = new Array();
console.log(arr);

// ******* 생성자와 프로토 타입 객체 ******* //
// 생성자 함수
const Book = function (title, author, page, done=false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.done = done;

    // this.finish = function () {
    //     this.done === false ? str = "읽는 중" : str= "완료";
    //     return str; 
    // }

    this.finish = function () {
        if (this.done) {str = "읽는 중";
        } else {str = "완료";}
        return str;
    }
}

// 프로토타입 객체
const book1 = new Book("자바스크립트", "김영한", 700);
console.log(book1.title);
console.log(book1.finish());

console.log("Book 생성자", Book.prototype);
console.log("book1 인스턴스",book1.__proto__);


// ***** 프로토타입 객체에 메서드 추가 ***** //
// 생성자 함수
const newBook = function (title, author, page, done=false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.done = done;

    // this.finish = function () {
    //     this.done === false ? str = "읽는 중" : str= "완료";
    //     return str; 
    // }
}

// 프로토타입 형식으로 메서드 정의(추천)
newBook.prototype.finish = function () {
    let str = "";
    this.done === false ? str = "읽는 중" : str= "완료";
    return str;
}

// 인스턴스 생성
const nBook1 = new newBook("자바스크립트", "김영한", 280, false);
const nBook2 = new newBook("점프 투 파이썬", "홍길동", 323, true);

console.log(nBook1.finish());
console.log(nBook2.finish());
console.log(newBook);
console.log(nBook1);