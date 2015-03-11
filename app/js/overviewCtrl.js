dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {


	$scope.dishes = Dinner.getFullMenu();

	$scope.getDishPrice = function(dish){
		return Dinner.getDishPrice(dish)
	}

	$scope.getTotalMenuPrice = function(){
		return Dinner.getTotalMenuPrice();
	}

	$scope.getNumberOfGuests = function(){
		return Dinner.getNumberOfGuests();
	}


});