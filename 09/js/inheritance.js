//***************************************************//
//***** Book 함수 생성자 함수 정의 *****//
//***************************************************//

// 기본 생성자 함수(부모 클래스) 정의
function Book (title, price) {
    this.title = title;
    this.price = price;
}

// Book 생성자 함수에 프로토타입으로 출력 메서드 추가
Book.prototype.buy = function () {  // Book 생성자 함수에 buy 메서드 추가
    console.log(`${this.title}을(를) ${this.price}원에 구매합니다.`);
}

const book1 = new Book('자바스크립트', 25000); // Book 인스턴스 생성
book1.buy();  // Book 객체의 buy() 메서드 호출


//***************************************************//
//***** Book 함수를 이용한 새로운 생성자 함수 정의 *****//
//***************************************************//

// NewBook 생성자 함수 정의(자식 클래스)
function NewBook (title, price, author) {
    Book.call(this, title, price);  // Book 생성자 함수를 this로 호출(Book의 속성을 재사용)
    this.author = author;  // 새로운 속성 추가
}

NewBook.prototype.buyNewBook = function () {  // buyNewBook 메서드 추가
    console.log(`${this.author}님이 집필한 ${this.title}을(를) ${this.price}원에 구매합니다.`);
}

Object.setPrototypeOf(NewBook.prototype, Book.prototype);  // 프로토타입 체인 설정

const newBook1 = new NewBook('자바스크립트', 25000, '홍길동');  // NewBook 인스턴스 생성
newBook1.buyNewBook();  // NewBook 객체의 buyNewBook() 메서드 호출
newBook1.buy();  // Book 객체의 buy() 메서드 호출

console.log(newBook1);  // NewBook 인스턴스 출력




//***************************************************//
//***** class 를 이용한 생성자(클래스) 함수 정의  *****//
//**************************************************//

// 기본 클래스 정의
class BookClass {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    buy() {
        console.log(`${this.title}을(를) ${this.price}원에 구매합니다.`);
    }
}

const cbook1 = new BookClass('자바스크립트', 25000);  // BookClass 인스턴스 생성
cbook1.buy();  // BookClass 객체의 buy() 메서드 호출

// 새로운 클래스 정의(자식클래스: 상속)
class NewBookClass extends BookClass {    // BookClass를 상속받음
    constructor(title, price, author) {
        super(title, price);  // 부모 클래스의 생성자 함수 호출
        this.author = author;  // 새로운 속성 추가
    }

    buyNewBook() {
        console.log(`${this.author}님이 집필한 ${this.title}을(를) ${this.price}원에 구매합니다.`);
    }
}

console.log(NewBookClass.prototype);  // NewBookClass 클래스 출력

const cnewBook1 = new NewBookClass('자바스크립트', 25000, '홍길동');  // NewBookClass 인스턴스 생성
cnewBook1.buyNewBook();  // NewBookClass 객체의 buyNewBook() 메서드 호출
cnewBook1.buy();  // BookClass 객체의 buy() 메서드 호출