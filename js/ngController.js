app.controller('postsCtrl', ['$scope', 'postsFactory', function($scope, postsFactory){
	postsFactory.getList(function(data){
		$scope.articles = data;
	});
}]);

app.controller('aboutCtrl', ['$scope', function($scope){
	$scope.title = "About Page";
}]);

app.controller('articleCtrl', ['$scope', 'postsFactory', '$route', '$filter', function($scope, postsFactory, $route, $filter){
	$scope.id = $route.current.params.id[1];
	postsFactory.getList(function(data){
		$scope.article = $filter('filter')(data, {id: $scope.id});
	});
	$scope.url = "posts/"+$scope.id+".html";
}]);

app.controller('contactCtrl', ['$scope', function($scope){
	$scope.social = "Disqus";
}]);