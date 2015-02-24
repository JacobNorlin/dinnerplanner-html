$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	console.debug("Loading site...");
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	var searchResultView = new SearchResultView($("#searchView"), model);
	var recipeView = new RecipeView($("#recipeView"), model);
	recipeView.hideView();
	//var summaryView = new SummaryView($("#summaryView"), model);
	//var fullMenuView = new FullMenuView($("#fullMenuView"), model);
	var sideSummaryView = new SideSummaryView($("#sideSummaryView"), model)


	//Create controllers
	var sideSummaryController = new SideSummaryController(sideSummaryView, model);
	var searchViewController = new SearchViewController(searchResultView, model);
	var searchResultViewController = new SearchResultViewController(searchResultView, model);
	var recipeViewController = new RecipeViewController(recipeView, model);

});