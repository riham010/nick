$(function () {
    'use strict';
    $("html").niceScroll({
        cursorcolor: "#468788"
    });
    var Nav = $('nav');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            Nav.addClass("navbar-shrink");
        } else {
            Nav.removeClass("navbar-shrink");
        }
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            1110: {
                items: 5
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });

    $('.pro').click(function () {
        $('html, body').animate({
            scrollTop: $('#products').offset().top
        }, 1000);
    });
    $('.pri').click(function () {
        $('html, body').animate({
            scrollTop: $('#price').offset().top
        }, 1000);
    });
    $('.fea').click(function () {
        $('html, body').animate({
            scrollTop: $('#features').offset().top
        }, 1000);
    });
    $('.cli').click(function () {
        $('html, body').animate({
            scrollTop: $('#clients').offset().top
        }, 1000);
    });

});
