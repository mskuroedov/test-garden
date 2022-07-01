function closeMobileMenu() {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
}

$('.header .menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.mobile__menu').addClass('--open');
    $('body').addClass('mobile-menu-opened')
})
$('.mobile__menu .close-btn').on('click', closeMobileMenu)
$('.mobile__menu nav a').on('click', closeMobileMenu)
$('.mobile__menu__bg').on('click', closeMobileMenu);
$(window).on('scroll', function (e) {
    if (window.pageYOffset > 50) {
        $('.header').addClass('--highlighten')
    } else {
        $('.header').removeClass('--highlighten')
    }
});