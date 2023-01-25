let navbar = document.querySelector('header nav');
let menuBtn = document.querySelector('#menu-btn');
let body = document.querySelector('body');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
 };