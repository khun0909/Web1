// const open = document.getElementById('open');
// const modal-box = document.querySelector('#modal-box');
// const close = document.getElementById('close');

const open = document.querySelector('#open');
const modalbox = document.querySelector('#modal-box');
const close = document.querySelector('#close');

open.onclick = function(){
    modalbox.classList.add('actice');
}
close.addEventListener("click",function(){
    modalbox.classList.remove('active');
})

// open.addEventListener("click", function(){
//     modalbox.classList.toggle('active');

// })