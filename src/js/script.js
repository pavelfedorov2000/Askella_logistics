$(function () {

    @@include('../blocks/modules/burger/burger.js')

    @@include('tabs.js')

    @@include('accordion.js')

    $('.filter-style').styler();

    $('.header__lang').on('click', function () {
        $(this).siblings().removeClass('header__lang--active');
        $(this).addClass('header__lang--active');
    });

    if (window.innerWidth < 850) {
        $('.header__search-btn').on('click', function () {
            $('.header__search').slideToggle('300');
        });
    }

    $('.promo__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="promo__slider-btn promo__slider-btn--prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z" fill="white"/></svg></button>',
        nextArrow: '<button class="promo__slider-btn promo__slider-btn--next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="white"/></svg></button>',
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

    $('.history-tape').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="#00415F"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn--next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 30L22 20L12 10L14 6L28 20L14 34L12 30Z" fill="#00415F"/></svg></button>',
        appendArrows: $('.p-history__slider-arrows'),
        //centerMode: true,
        //centerPadding: '60px',
        //autoplay: true,
        //autoplaySpeed: 2000,
        //fade: true,
        //appendDots: ,
        //rtl: true,
        //mobileFirst: true,
        //rows: 2,
        //slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    variableWidth: true,
                }
            },
        ]
    });

    /* $('.history-tape').on('afterChange', function (event, slick, currentSlide) {
        currentSlide.addClass('history-tape__item--active');
    }); */

    $('.history-tape').on('swipe', function(event, slick, direction){
        const index = $(this).attr("data-slick-index");
        $(".history-tape").slick("slickGoTo", index);
    });

    $(".history-tape__item").on("click", function() {
        const index = $(this).attr("data-slick-index");
        $(".history-tape").slick("slickGoTo", index);
    });

    /* $('.slider-btn--next').not('.slick-disabled').on('click', function () {
        //const index = $('.history-tape__item--active').attr("data-slick-index");
        //$(".history-tape").slick("slickNext");
    }); */

    $('.history-tape__item').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('history-tape__item--active');
        $('.history__content').removeClass('history__content--active');
        $(this).addClass('history-tape__item--active');
        $($(this).attr('href')).addClass('history__content--active');
        $('.history__year').text($('.history-tape__item--active .history-tape__item-year').text());

        //$('.slider').slick('setPosition'); // Инициализация слайдера
    });

    $('.history__year').text($('.history-tape__item--active .history-tape__item-year').text());

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded',
        }
    });

});



