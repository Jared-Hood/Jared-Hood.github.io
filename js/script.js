// Js for nav scroll slowly

// let mobileMenuBtn = document.querySelector('.js-open-mobile-menu');
// let mobileMenuEl = document.querySelector('.js-mobile-menu');


// mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// function toggleMobileMenu() {
//     mobileMenuEl.classList.toggle('is-open');
// }

let aboutBtn = document.querySelector('.js-about-btn');
let projectsBtn = document.querySelector('.js-projects-btn');
let resumeBtn = document.querySelector('.js-resume-btn');
let contactBtn = document.querySelector('.js-contact-btn');
let headerHeight = document.querySelector('.Header').style.height;
let scrollTopIcon = document.querySelector('.js-scroll-top');

aboutBtn.addEventListener('click', function() {scrollSection('#about');});
projectsBtn.addEventListener('click', function() {scrollSection('#projects');});
resumeBtn.addEventListener('click', function() {scrollSection('#resume');});
contactBtn.addEventListener('click', function() {scrollSection('#contact');});
scrollTopIcon.addEventListener('click', scrollPageTop);

function scrollSection(id) {
    let scrollEl = document.querySelector(id);
    scrollEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function scrollPageTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
