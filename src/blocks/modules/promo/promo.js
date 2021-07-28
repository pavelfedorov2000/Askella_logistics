$('.promo__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="promo__slider-btn promo__slider-btn--prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:/www.w3.org/2000/svg"><path d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z" fill="white"/></svg></button>',
    nextArrow: '<button class="promo__slider-btn promo__slider-btn--next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:/www.w3.org/2000/svg"><path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="white"/></svg></button>',
    scrollSpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                variableWidth: true,
                centerMode: true,
            }
        },
    ]
});