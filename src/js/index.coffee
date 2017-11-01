'use strict'


import 'font-awesome-webpack'
import '../styles/style.scss'
import 'url-loader?name=[name].[ext]!../../favicon.ico'
import gaz from'img-loader?name=[name].[ext]!../images/gaz.png'
import comingSoon from'img-loader?name=[name].[ext]!../images/coming-soon.jpg'
import planksetting from 'img-loader?name=[name].[ext]!../images/planksetting.png'
import 'file-loader?name=[name].[ext]!../index.html'


(($) ->
	whatido = ['FULLSTACK', 'PHP', 'RUBY', 'PYTHON']
	i = 0
	$('.gaz-img').attr('src', gaz)
	$('.coming-soon-img').attr('src', comingSoon)
	$('.plank-img').attr('src', planksetting)
	
	setTimeout(() ->
		$('.loader').hide()
		$('.main').show()
		$('.about').show()
		$('.skills').show()
		$('.works').show()
		$('.contact').show()
	, 500)


	setInterval(() ->
		i++
		$('.whatido').text(whatido[i] + ' DEVELOPER')
		if (i == 3)
			i = -1
	, 4000)

	# Events
	$(document).on('scroll', (e) ->
		scrollPosition = $(document).scrollTop() + 110
		$('nav div a').each(() ->
			currentLink = $(this)
			if currentLink.attr("href") == "#contact"
				if $(window).width() >= 680
					scrollPosition += 500
				else
					scrollPosition += 200
			refElement = $(currentLink.attr("href"))
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition)
				$('nav div a').removeClass("active")
				currentLink.addClass("active")
			else
				currentLink.removeClass("active")
		)
		# toggle nav background
		if($('.k-nav').offset().top > 60)
			$('.k-nav').addClass('navdown')
		else
			$('.k-nav').removeClass('navdown')
	)
) jQuery