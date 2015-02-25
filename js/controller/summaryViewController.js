var SummaryViewController = function(view, model){

	console.debug(view.printRecipeButton);	

	view.printRecipeButton.click(function(){
		view.hideOverviewView();
		new FullRecipeView($("#printRecipeView"), model);
		
	})

	view.backButton.click(function(){
		$("#fullSearchView").show();
		view.killView();
		
	})

}