
let newp = document.createElement("p"); // 새로운 p 태그 생성
let textNode = document.createTextNode("TypeScript"); // 텍스트 노드 생성

newp.appendChild(textNode); // p 태그에 텍스트 노드 연결

let div = document.querySelector("div"); // div 태그 선택
div.appendChild(newp); // div 태그에 p 태그 연결


// 버튼을 클릭하면 p 태그를 생성하는 함수(3번째 p 태그 생성)
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    newp = document.createElement("p");
    textNode = document.createTextNode("add p tag");

    newp.appendChild(textNode);

    let basicNode = document.querySelectorAll("p")[2]; // 3번째 p 태그 선택
    
    prtNode = basicNode.parentNode; // 부모 노드 선택
    prtNode.insertBefore(newp, basicNode); // 3번째 p 태그 앞에 새로운 p 태그 연결
});