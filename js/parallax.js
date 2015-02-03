$(document).ready(function(){
	$('.nav').hide();
	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		var vh = $(window).height()
		var vw = $(window).width()
		console.log(vh)
		console.log(scrolled)

		$(document.body).on('click', '#home', function(event) {
				event.preventDefault();
				scrolled = 0;
				$(window).scrollTop(0)
		});

		$('.header_blackout_div').css('opacity', (scrolled * .002 ) );
		
		$('.header_container').css({'top': 50 + (scrolled *.6) + 'px'});
		$('.header_nav_container').css({'top': 225 + (scrolled *.6) + 'px',
																		'left': 30 + (scrolled *.6) + '%'	});

		// $('.about').css('top', 300 - (scrolled * .25) + '%');

		if ( scrolled > vh-220 ) {
			$('#nav_container').slideDown(200)
			$('.nav').slideDown(400)
		} else { 
			$('#nav_container').hide()
			$('.nav').slideUp(400)
		}

	})

})