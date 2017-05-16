const openclose = (node) => {

    /* Обратный звонок */
    $('.feedback-call-btn').click(function () {
        $('.popup-overlay').addClass('active');
        setTimeout("$('.popup-holder').find('input').eq(0).focus();", 100);
    })
    $('.popup-overlay, .close-popup').click(function () {
        $('.popup-overlay').removeClass('active');
    })
    $('.popup-holder').click(function (e) {
        e.stopPropagation();
    })

    /* Вертикальное меню */
    if ($(window).width() <= 1179){
        $('.menu-link').bind('click', function () {
            $('.menu-holder').toggleClass('active');
            $('.nav-menu-holder').removeClass('active');
            $('.hamburger').removeClass('active');
        })
    }
    $(window).resize(function() {
        if ($(window).width() <= 1179) {
            $('.menu-link').bind('click', function () {
                $('.menu-holder').toggleClass('active');
                $('.nav-menu-holder').removeClass('active');
                $('.hamburger').removeClass('active');
            })
        }
    });
    if ($(window).width() > 1179){
        $('.menu-holder').removeClass('active');
        $('.menu-link').unbind('click');
    }
    $(window).resize(function() {
        if ($(window).width() > 1179) {
            $('.menu-holder').removeClass('active');
            $('.menu-link').unbind('click');
        }
    });

    /* Навигационное меню */
    $('.hamburger').click(function () {
        $('.nav-menu-holder').toggleClass('active');
        $('.hamburger').toggleClass('active');
        $('.menu-holder').removeClass('active');
    })
    if ($(window).width() > 676){
        $('.nav-menu-holder').removeClass('active');
        $('.hamburger').removeClass('active');
    }
    $(window).resize(function() {
        if ($(window).width() > 676){
            $('.nav-menu-holder').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });
}
export default openclose;
