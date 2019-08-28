(function ($) {
    $(document).ready(function () {
        //sticky menu when scroll
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            var heroHeight = document.getElementById('top').offsetHeight;
            if (scroll > heroHeight) {
                $("header.navigation-menu-section").addClass("sticky_top_section");
            } else {
                $("header.navigation-menu-section").removeClass("sticky_top_section");
            }
        });

        //smooth scrolling
        $("ul#nav li a, ul.mobile-menu li a").click(function () {
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop: position - 50
            }, 800);
        });

        //mobile menu custom js
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        //testimonials slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });


        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });

        //datepicker
        $(function () {
            $("#datepicker").datepicker();
        });

        //time picker
        $('#r_time').timepicker();

    });


    /*gallery area*/
    $('#gallery_filter').mixItUp();

    /*magnific popup*/
    $('.single-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
    });


})(jQuery);

