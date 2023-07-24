let book1 = {
    title : "자바스크립트",
    pages : 500,
    author : "홍길동",
}

let book2 = {
    title : "HTML5 + CSS3",
    pages : 320,
    author : "이순신",
}


// ******* class를 이용한 객체 생성 ****** //
class book {
    //  ******* 생성자(속성) ******* //
    constructor(title, pages, author, done = false) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.done = done;
    }

    readBook() {
        let str;
        // if(this.done===true){str = "읽음"}else{str = "읽지 않음"}
        this.done === true ? str = "읽음" : str = "읽지 않음";
        return str;
    }
}

// ******* 객체 생성(인스턴스 객체) ******* //
let book3 = new book("자바스크립트", 500, "홍길동", true);
let book4 = new book("HTML5 + CSS3", 320, "이순신", false);

console.log(book3);

console.log(`${book3.title}, ${book3.author}, ${book3.readBook()}`);
console.log(`${book4.title}, ${book4.author}, ${book4.readBook()}`);
