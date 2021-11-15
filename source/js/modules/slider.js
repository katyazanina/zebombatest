 
 const init = () => {
    let offset = 0;
    let slideIndex = 1;
    let slidePerView = 8;
    const slides = document.querySelectorAll('.slider__slide'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next'),
        slidesWrapper = document.querySelector('.slider__container'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.slider__wrap');

    slidesField.style.width = (100 * slides.length)/slidePerView + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width / slidePerView;
    });

    next.addEventListener('click', () => {

        if (offset == ((+width.slice(0, width.length - 2)) / (Math.round(slides.length / slidePerView)))) {
            next.setAttribute('disabled', "disabled");
            prev.removeAttribute('disabled', "disabled");
        } else {
            offset += (+width.slice(0, width.length - 2) / slidePerView); 
            next.removeAttribute('disabled', "disabled");
            prev.removeAttribute('disabled', "disabled");
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            prev.setAttribute("disabled", "disabled");
            next.removeAttribute('disabled', "disabled");
        } else {
            prev.removeAttribute('disabled', "disabled");
            next.removeAttribute('disabled', "disabled");
            offset -= (+width.slice(0, width.length - 2) / slidePerView);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });
};

export default {
	init
};