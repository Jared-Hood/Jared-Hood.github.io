let aboutBtn = document.querySelector('.js-about-btn');
let projectsBtn = document.querySelector('.js-projects-btn');
let resumeBtn = document.querySelector('.js-resume-btn');
let contactBtn = document.querySelector('.js-contact-btn');
let headerHeight = document.querySelector('.Header').style.height;
let scrollTopIcon = document.querySelector('.js-scroll-top');

aboutBtn.addEventListener('click', function() {scrollSection('#About');});
projectsBtn.addEventListener('click', function() {scrollSection('#Projects');});
resumeBtn.addEventListener('click', function() {scrollSection('#Resume');});
contactBtn.addEventListener('click', function() {scrollSection('#Contact');});
scrollTopIcon.addEventListener('click', scrollPageTop);

function scrollSection(id) {
    let scrollEl = document.querySelector(id);
    console.log(id);
    scrollEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function scrollPageTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
