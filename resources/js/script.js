$(function () {

    /* For the sticky navigation */
    $('.js--section-pests-types').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').on('click', function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
    });


    $('.js--scroll-to-start').on('click', function () {
        $('html, body').animate({ scrollTop: $('.js--section-pests-types').offset().top }, 1000)
    });



    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    $('.js--wp-5').addClass('animated');
    
    /* Mobile navigation */
    $('.js--nav-icon').on('click', function () {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);

        if (icon[0].name == 'reorder-three') {
            icon[0].name = 'close';

        } else {
            icon[0].name = 'reorder-three';
        }
    });

})