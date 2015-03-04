var SearchResultViewController = function(view, model){

	view.searchResultView.click(function(e){
		var dishId = $(e.target).attr("dishId");
		if(dishId){
			model.getDish(dishId);
			switchView($("#recipeView"));
		}
		console.debug(e.target)
	});

	var switchView = function(newView){
		view.hideView();
		newView.show();
	}
	
}