$(document).ready(function(){
	$('.nav').hide();
	$(window).scrollTop(1);
	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		var vh = $(window).height()
		var vw = $(window).width()
		console.log(vh)
		console.log(scrolled)


		$(document.body).on('click', '#home', function(event) {
				event.preventDefault();
				$(window).scrollTop(0)
		});

		$(document.body).on('click', '#about', function(event) {
				event.preventDefault();
				$(window).scrollTop(vh)
		});

		$(document.body).on('click', '#work', function(event) {
				event.preventDefault();
				$(window).scrollTop(2.25*vh)
		});

		$(document.body).on('click', '#contact', function(event) {
				event.preventDefault();
				$(window).scrollTop(3.75*vh)
		});


		$('input#email_button').click(function(){
			console.log('emailing!')
			var subject = $('#email_subject').val();
			var message = $('#email_message').val();
			var link = "mailto:ross.wittenberg@gmail.com?"
			         + "&subject=" + escape(subject)
			         + "&body=" + escape(message)
			;
			window.location.href = link;
		})


		$('.header_whiteout_div').css('opacity', (scrolled * .002 ) );
		
		$('.header_container').css({'top': 1 + (scrolled * .1) + '%'});
		$('.header_nav_container').css({'top': 255 - (scrolled * 1.2) + 'px', 
																		'opacity': 1-(scrolled * .002 )});

		
		if ( scrolled > 2.26*vh ){
			$('.header_image').find('img').attr('src', 'images/dubrovnik.jpg')
		} else if ( scrolled > vh-200 ) {
			$('#nav_container').slideDown(200)
			$('.nav').slideDown(400)
			$('.header_image').find('img').attr('src', 'images/rocky_beach.jpg')
		} else { 
			$('#nav_container').hide()
			$('.nav').slideUp(400)
			$('.header_image').find('img').attr('src', 'images/fjord.jpg')
		}

	})

})