app.factory('postsFactory', ['$http', function($http){
	return {
		getList: function(func){
			$http.get('db/posts.json').success(func);
		}
	};
}])