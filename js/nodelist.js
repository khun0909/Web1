let newp = document.createElement("p");  //새로운 p 태그 생성
let textNode = document.createTextNode("TypeScript"); //텍스트 노드 생성

newp.appendChild(textNode);  //p태그에 텍스트 노드 연결

let div = document.querySelector("div");
div.appendChild(newp); //div에 연결
//document.body.appendChild(newp); //body에 연결

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    newp = document.createElement("p");
    textNode = document.createTextNode("add p tag");

    newp.appendChild(textNode);

    let basicNode = document.querySelectorAll("p")[2];   //3번째 p 태그를 선책함
    div.insertBefore(newp, basicNode); //3번째 p태그 앞에 새로운 p태그 연결

    document.querySelector("h1").remove(); //h1태그 삭제
})