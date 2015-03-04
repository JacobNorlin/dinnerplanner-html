var RecipeViewController = function(view, model){
	
	console.debug(view.backButton);

	view.backButton.click(function(){
		switchView($("#searchView"));
	})

	view.confirmButton.click(function(){
		model.setSelectedDish(model.getCurrentDish().Category, model.getCurrentDish());
		console.debug(model.selectedDishes);
	})

	var switchView = function(newView){
		view.hideView();
		newView.show();
	}



}