let newp = document.createElement("p");  //새로운 p 태그 생성
let textNode = document.createTextNode("TypeScript"); //텍스트 노드 생성

newp.appendChild(textNode);  //p태그에 텍스트 노드 연결

let div = document.querySelector("div");
div.appendChild(newp); //div에 연결
//document.body.appendChild(newp); //body에 연결