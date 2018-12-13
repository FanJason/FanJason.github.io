(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	$(document).ready(function() {
		$(window).scroll(function() {
			$(".derivative").each(function(i) {
				var bottom_of_object = $(this).position().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
					if (bottom_of_window > bottom_of_object + 200){
					$(this).animate({'opacity':'1'}, {"duration": 1500});
				}
			});
		});
	});

	$(".enableDark").click(
		function() {
				if (document.getElementsByClassName("dark").length === 0) {
					$("body").addClass("dark");
					$("#section-services").removeClass("bg-light");
					$("#section-contact").removeClass("bg-light");
					$(".penguin").attr('src', './images/penguin.png');
					$('.enableDark').text('Light');
				} else {
					$("body").removeClass("dark");
					$("#section-services").addClass("bg-light");
					$("#section-contact").addClass("bg-light");
					$(".penguin").attr('src', './images/IMG-2841.jpg');
					$('.enableDark').text('Dark');
				}
			}
	)

	$('.port').hover(
		function(){
			let test = $(this).attr('src').split(".");
			let name = test[test.length - 2];
			if (name[name.length - 1] !== "1") {
				name = name + "1." + test[test.length - 1];
				$(this).attr('src', name);
			} else {
				let noOne = $(this).attr('src').split("1");
				let name = noOne[0] + noOne[1];
				$(this).attr('src', name);
			}
		}
	)

	$(".bottom").hover(
		function() {
			$(this).toggleClass("changed");
		}
	)

	// navigation
	var OnePageNav = function() {
		var navToggler = $('.navbar-toggler');
		$(".smoothscroll[href^='#'], #pb-navbar ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();
		 	var hash = this.hash;
		 		
		 	$('html, body').animate({

		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });
		});
		$("#pb-navbar ul li a[href^='#']").on('click', function(e){
			if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});

		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};

	/*----------------------------------------
		Animate Scroll
	----------------------------------------*/

	var contentWayPoint = function() {
		var i = 0;
		$('.site-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .site-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};

	var navbarState = function() {

		var lastScrollTop = 0;
		$(window).scroll(function(){

			var $this = $(this),
				 	st = $this.scrollTop(),
				 	navbar = $('.site-navbar');

			if ( st > 200 ) {
				navbar.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled awake');
			}

			if ( navbar.hasClass('scrolled') && st > 300 ) {
		   	if (st > lastScrollTop){
		      // if (navbar.hasClass('scrolled')) {
		      	navbar.removeClass('awake');
		      	navbar.addClass('sleep');
		      // }
		   	} else {
		      // if (navbar.hasClass('scrolled')) {
		      	navbar.addClass('awake');
		      	navbar.removeClass('sleep');
		      // }
		   	}
		   	lastScrollTop = st;
		  }

		});



		$('.site-navbar')
		  .mouseenter(function() {
		    var $this = $(this);
		    $this.addClass('awake');
		    $this.removeClass('sleep');
		  })
		  .mouseleave(function() {
		    var $this = $(this);
		    $this.addClass('sleep');
		    $this.removeClass('awake');
		  });
	};

	// Page Nav
	var clickMenu = function() {

		$('.navbar-nav a:not([class="external"])').click(function(event){

			var section = $(this).data('nav-section'),
				navbar = $('.navbar-nav');
				if (isMobile.any()) {
					$('.navbar-toggle').click();
				}
				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500, 'easeInOutExpo');
			   }

		    event.preventDefault();
		    return false;
		});


	};

	var smoothScroll = function() {
		var $root = $('html, body');

		$('.smoothscroll').click(function () {
			$root.animate({
		    scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500);
			return false;
		});
	};
	
	var portfolioMasonry = function() {
 		$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });


      if(document.getElementById("section-portfolio")){
            var $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all"
              }
            })
      };
	};

	$(function(){
		OnePageNav();
		contentWayPoint();
		navbarState();
		clickMenu();
		smoothScroll();
		portfolioMasonry();
	});
})();

