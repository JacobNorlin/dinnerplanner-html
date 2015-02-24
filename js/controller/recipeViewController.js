var RecipeViewController = function(view, model){
	
	console.debug(view.backButton);

	view.backButton.click(function(){
		switchView($("#searchView"));
	})

	view.confirmButton.click(function(){
		model.setSelectedDish(model.getDish(model.getCurrentDish()).type, model.getCurrentDish());
		console.debug(model.selectedDishes);
	})

	var switchView = function(newView){
		view.hideView();
		newView.show();
	}



}