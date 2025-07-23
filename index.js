const hamburger = document.getElementById('harmburger');

const navbar = document.getElementById('navbar');

hamburger.addEventListener('click',() => {
    navbar.classList.toggle('show');
});

