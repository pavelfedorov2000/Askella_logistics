if (window.innerWidth < 991) {
    $('.menu__item-drop').on('click', function () {
        $(this).parent().parent().siblings().removeClass('menu__item--active');
        $(this).parent().parent().siblings().find('ul.menu__sublist').slideUp('300');
        $(this).parent().parent().toggleClass('menu__item--active');
        $(this).parent().next().slideToggle('300');
    });
}

if (window.innerWidth > 991) {
    $('.menu__item').hover(function () {
        $(this).siblings().find('div.submenu').slideUp('100');
        $(this).find('div.submenu').slideToggle('100');
    });
}