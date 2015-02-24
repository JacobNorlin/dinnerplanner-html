var SearchResultViewController = function(view, model){
	console.log("hej")


	view.searchResultView.click(function(e){
		var dishId = $(e.target).attr("dishId");
		if(dishId){
			model.setCurrentDish(dishId);
			switchView($("#recipeView"));
		}
		console.debug(e.target)
	});

	var switchView = function(newView){
		view.hideView();
		newView.show();
	}
	
}