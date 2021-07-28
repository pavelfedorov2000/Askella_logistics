$('.history-tape').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000svg"><path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="#00415F"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000svg"><path d="M12 30L22 20L12 10L14 6L28 20L14 34L12 30Z" fill="#00415F"/></svg></button>',
    appendArrows: $('.p-history__slider-arrows'),
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

$('.history-tape').on('swipe', function(event, slick, direction){
    const index = $(this).attr("data-slick-index");
    $(".history-tape").slick("slickGoTo", index);
});
$(".history-tape__item").on("click", function() {
    const index = $(this).attr("data-slick-index");
    $(".history-tape").slick("slickGoTo", index);
});
$('.history-tape__item').on('click', function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('history-tape__item--active');
    $('.history__content').removeClass('history__content--active');
    $(this).addClass('history-tape__item--active');
    $($(this).attr('href')).addClass('history__content--active');
    $('.history__year').text($('.history-tape__item--active .history-tape__item-year').text());
});
$('.history__year').text($('.history-tape__item--active .history-tape__item-year').text());