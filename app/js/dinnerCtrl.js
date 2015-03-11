// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

	$scope.numberOfGuests = Dinner.getNumberOfGuests();
	$scope.fullMenu = Dinner.getFullMenu();

	$scope.setNumberOfGuest = function(number){
		Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}

	$scope.getFullMenu = function(){
		return Dinner.getFullMenu();
	}

	$scope.removeItem = function(dish){
		Dinner.removeDishFromMenu(dish)
	}

	$scope.getDishPrice = function(dish){
		return Dinner.getDishPrice(dish)
	}

	$scope.goBack = function(){
		window.history.back();
	}



	


  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});