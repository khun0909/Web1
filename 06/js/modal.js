// const open =document.getElementById('open');
// const modelBox = document.getElementById('model-box');
// const close = document.getElementById('close');

const open =document.querySelector('#open');
const modalbox = document.querySelector('#modal-box');
const close = document.querySelector('#close');

open.onclick = function(){
    modalbox.classList.add('active');
}

close.addEventListener("click",function(){
    modalbox.classList.remove('active');
})

// toggle의 open에 적용
// open.addEventListener("click",function(){
//     modalbox.classList.toggle('active');
// })
