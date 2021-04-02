

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

