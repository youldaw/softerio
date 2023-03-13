$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('active');
    });

    $('.order__app-budget').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // navbar hover
    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('ul.navbar-nav .dropdown-toggle').hover(function () {
        $(this).toggleClass('active');
    }, function () {
        $(this).toggleClass('active');
    });

    $('.dropdown-menu').hover(function () {
        $('.dropdown-toggle').toggleClass('active');
    }, function () {
        $('.dropdown-toggle').toggleClass('active');
    });

    // back to top
    var btn = $('#back-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });


});

