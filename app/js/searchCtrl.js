// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,$routeParams, $http, Dinner) {


  	$scope.query = $routeParams.searchTerm;

  	$scope.search = function(query) {
		var apiKey = "dvxzUl57TpT2oAV9h288wTuTCEEQE8z8";

  		Dinner.setLastSearchTerm(query);
  		$scope.query = Dinner.getLastSearchTerm();
		$scope.status = "Searching...";
		var showMoreClickStream = Rx.Observable.fromEvent($('#showMoreButton'), 'click')

		var pg = 1
		
		//Map every click in the stream to a new search for a new page
		var searchStream = showMoreClickStream.flatMap(
			function(){
				pg++;
				return Rx.Observable.fromPromise(
						$http(
		    				{method: 'GET',
		    		        url: 'http://api.bigoven.com/recipes',
		    		        params: { api_key:apiKey, pg:pg, rpp:20, title_kw:query}}
						)
					);	
			}
		).merge(Rx.Observable.fromPromise(
					$http(
		    				{method: 'GET',
		    		        url: 'http://api.bigoven.com/recipes',
		    		        params: { api_key:apiKey, pg:1, rpp:20, title_kw:query}}
						)
					)
		)

		//Add new dishes to page
		searchStream.subscribe(
			function(data){
				$scope.dishes = _.union($scope.dishes, data.data.Results)
				$scope.status = ""
			},
			function(data){
				searchStream = searchStream.skip(1);
				$scope.status = "There was an error, please try again";
			}
		);
	}

	$scope.confirmDish = function(dish){
		Dinner.addDishToMenu(dish);
	}

	if($scope.query != ""){
  		$scope.search($scope.query);
  	}


});