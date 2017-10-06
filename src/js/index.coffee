'use strict'


import 'font-awesome-webpack'
import 'bootstrap'
import '../styles/style.scss'
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
	, 2000)

	setInterval(() ->
		i++
		$('.whatido').text(whatido[i] + ' DEVELOPER')
		if (i == 3)
			i = -1
	, 4000)

	# Events
	$(document).on('scroll', (e) ->

		if($('.k-nav').offset().top > 60)
			$('.k-nav').addClass('navdown')
		else
			$('.k-nav').removeClass('navdown')
	)
) jQuery