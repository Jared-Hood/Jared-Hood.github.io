// Js for nav scroll slowly

let mobileMenuBtn = document.querySelector('.js-open-mobile-menu');
let mobileMenuEl = document.querySelector('.js-mobile-menu');


mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenuEl.classList.toggle('is-open');
}