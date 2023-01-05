(function ($) {
    "use strict";
    // Main menu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.info-bar').on('click', function () {
        $('.extra-info').addClass('info-open')

    })
    $('.close-icon').on('click', function () {
        $('.extra-info').removeClass('info-open')
    })
    // slider - active

            
    

		// HOME PAGE SLIDER
		$(".slider-area").owlCarousel({
			loop:true,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		    items:1,		    
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:10000,
		    mouseDrag: false,
            touchDrag: false,
		});

		$(".slider-area").on("translate.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide h2, .single-slide .hero-buttons").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".slider-area").on("translated.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide h2, .single-slide .hero-buttons").addClass("animated fadeInDown").css("opacity", "0");
        });



    // counterUp



    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

      //popup
  $('.hero-buttons .mfp-iframe').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });

        //popup
        $('.mfp-iframe').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
          });
    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // slider - active
    $('.active-team').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        prevArrow: '<a class="team-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="team-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
            },

        ]
    });

    // slider - active
    $('.skill-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a class="skill-slick-prev"><i class="fas fa-arrow-left"></i></a>',
        nextArrow: '<a class="skill-slick-next"><i class="fas fa-arrow-right"></i></a>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Testimonial - active
    $('.testimonial-active').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="team-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="team-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 2,
        slidesToScroll: 2,
        focusOnSelect: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots:false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
            },
   
        ]
    });

    // slider - active
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Testimonial - active
    $('.portfolio-active-2').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="team-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="team-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    
                }
            },
           
        ]
    });

      // counter-up

  $('.counter-up').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3100,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  $(".nav a").click(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
  }); 

    //Wow
    new WOW().init();

    jQuery(window).load(function (){
        $(".loader").fadeOut(500);
    });

    // bubble


if($("#search-input").length > 0) {

var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
});

}




})(jQuery);