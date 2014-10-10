var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'views/posts.html',
			controller: 'postsCtrl',
			controllerAs: 'posts'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutCtrl',
			controllerAs: 'about'
		})
		.when('/post:id', {
			templateUrl: 'views/article.html',
			controller: 'articleCtrl',
			controllerAs: 'article'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactCtrl',
			controllerAs: 'contact'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

// Functions

var slideUp = function(){
	$('.top-bar').fadeIn(2000);
	$('[data-aside]').animate({
		top: '-100px'
	});
};

var slideDown = function(){
	$('.top-bar').fadeOut();
	$('[data-aside]').animate({
		top: '-50px'
	});
};

var searchFunc = function(){
	var input = $('.input-search');
	var search = "http://www.google.co.ma/cse?cx=000011907532151474316:ajudkwt9lvi&ie=UTF-8&q=h#gsc.tab=0&gsc.q=" + input[0].value;
	input.val(' ');
	window.open(search);
};

/*** DOM manupilation ***/
(function($){
	$('.input-search').bind('click', function(){
		if ($(window).width() >= 500) {
			$(".resize").animate({
				width: '350px'
			});
		}
	}).bind('blur', function(){
		if ($(window).width() >= 500) {
			$(".resize").animate({
				width: '200px'
			});
		}
	});
	$('[data-aside]').bind('click', slideUp);
	$('.menu-button').bind('click', slideDown);
	$('.search').bind('click', searchFunc);
})(jQuery);

