$(document).ready(function () {
    $('.header .menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.mobile__menu').addClass('--open');
        $('body').addClass('mobile-menu-opened')
    })
    $('.mobile__menu .close-btn').on('click', function () {
        $('.mobile__menu').addClass('--closing');
        setTimeout(() => {
            $('.mobile__menu').removeClass('--open');
            $('.mobile__menu').removeClass('--closing');
            $('body').removeClass('mobile-menu-opened')
        }, 250)
    })
    $('.mobile__menu__bg').on('click', function () {
        $('.mobile__menu').addClass('--closing');
        setTimeout(() => {
            $('.mobile__menu').removeClass('--open');
            $('.mobile__menu').removeClass('--closing');
            $('body').removeClass('mobile-menu-opened')
        }, 250)
    });
    $(window).on('scroll', function (e) {
        if (window.pageYOffset > 50) {
            $('.header').addClass('--highlighten')
        } else {
            $('.header').removeClass('--highlighten')
        }
    });
})