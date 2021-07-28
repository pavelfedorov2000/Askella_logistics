$('.burger-btn').on('click', function () {
    $('.burger-btn').addClass('burger-btn--active');
    $('.burger-menu').addClass('burger-menu--active');
});

$('.burger-menu__close-btn').on('click', function () {
    $('.burger-btn').removeClass('burger-btn--active');
    $('.burger-menu').removeClass('burger-menu--active');
});

$('.menu__sublink').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--active');
}); 