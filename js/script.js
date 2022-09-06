let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchBox.classList.remove('active');
}

let searchBox = document.querySelector('.search-box');
document.querySelector('#search-btn').onclick = () =>{
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search-box.classList.remove('active');
}
