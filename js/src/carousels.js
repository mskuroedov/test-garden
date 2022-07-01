const OWL_NAV_ARROWS = [
    '<svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM21 4L1 4V5L21 5V4Z" fill="currentColor"/></svg>',
    '<svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM0 5H20V4H0L0 5Z" fill="currentColor"/></svg>'];

function moveOwlDotsBetweenNav(owlContainer) {
    const navBlock = $(owlContainer).find('.owl-nav');
    const dotsBlock = $(owlContainer).find('.owl-dots');
    navBlock.find('.owl-prev').after(dotsBlock);
}

function moveOwlNavAfterElem(owlContainer, elem) {
    const navBlock = $(owlContainer).find('.owl-nav');
    elem.after(navBlock);
}

function moveOwlDotsOnTopOfSlider(owlContainer) {
    const stageBlock = $(owlContainer).find('.owl-stage-outer');
    const navBlock = $(owlContainer).find('.owl-nav');
    stageBlock.before(navBlock);
}

$(document).ready(function () {
    let promoSlider = $('#promo-slider');
    promoSlider.owlCarousel({
        dots: true,
        loop: true,
        items: 1,
        margin: 1,
        navText: OWL_NAV_ARROWS,
        responsive: {
            0: {
                nav: false
            },
            1200: {
                nav: true
            }
        }
    })
    moveOwlDotsBetweenNav(promoSlider);
    moveOwlDotsOnTopOfSlider(promoSlider);

    $('.grass-types__item .cover .owl-carousel').owlCarousel({
        dots: true,
        loop: true,
        items: 1,
        margin: 1,
        nav: false
    })

    let aboutSlider = $('#about-company-slider');
    aboutSlider.owlCarousel({
        margin: 0,
        items: 1,
        dots: true,
        loop: false,
        nav: true,
        navText: OWL_NAV_ARROWS
    })
    moveOwlDotsBetweenNav(aboutSlider);

    let exampleSlider = $('#examples-slider');
    exampleSlider.owlCarousel({
        margin: 0,
        items: 1,
        dots: true,
        loop: false,
        nav: true,
        navText: OWL_NAV_ARROWS
    })
    moveOwlDotsBetweenNav(exampleSlider);

    let feedbackSlider = $('#feedback-slider');
    feedbackSlider.owlCarousel({
        dots: true,
        loop: false,
        nav: true,
        navText: OWL_NAV_ARROWS,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                slideBy: 1
            },
            1200: {
                items: 2,
                margin: 30,
                slideBy: 2
            }
        }
    })
    moveOwlDotsBetweenNav(feedbackSlider);
    moveOwlNavAfterElem(feedbackSlider, $('.feedback__slider__bottom button'))

    $('[data-serialscrolling]').serialscrolling();

});