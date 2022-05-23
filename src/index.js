const menu = document.querySelector('.menu');
const navbar = document.querySelector('#nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});