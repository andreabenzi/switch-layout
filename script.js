$( document ).ready(function() {

    /*Home Slider*/
    var swiper = new Swiper('#home-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true
    });

    /*Scroll down*/
    $('a[href^="#"]').on('click', function(event) {
    	var target = $(this.getAttribute('href'));
    	if( target.length ) {
        	event.preventDefault();
        	$('html, body').stop().animate({
            	scrollTop: target.offset().top
        	}, 1000);
    	}
	});

    /*Portfolio filter*/
    $(function() {
        var selectedClass = "";
        $(".fil-cat").click(function(){ 
            $(".toolbar .btn").removeClass('active');
            $(this).addClass('active');
            selectedClass = $(this).attr("data-rel"); 
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
            }, 300); 
        });
    });

    /*Testimonial Slider*/
    var swiper = new Swiper('#testimonial-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true
    });

});