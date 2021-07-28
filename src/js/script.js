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

    @@include('../blocks/modules/promo/promo.js')

    @@include('../blocks/modules/history/history.js')

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



