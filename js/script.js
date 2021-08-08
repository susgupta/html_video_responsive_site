//responsive menu stuff
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navigation.classList.toggle('active');
})

//for video slider
const silderButtons = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');

var sliderNav = function (selection) {

    silderButtons.forEach((button) => {
        button.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    silderButtons[selection].classList.add('active');
    slides[selection].classList.add('active');
    contents[selection].classList.add('active');
}

silderButtons.forEach((button, selection) => {
    button.addEventListener('click', () => {
        sliderNav(selection);
    })
})