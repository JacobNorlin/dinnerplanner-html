$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	console.debug("Loading site...");
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	var searchView = new SearchView($("#searchBarView"));
	var searchResultView = new SearchResultView($("#searchResultView"), model);
	//var recipeView = new RecipeView($("#recipeView"), model);
	//var summaryView = new SummaryView($("#summaryView"), model);
	//var fullMenuView = new FullMenuView($("#fullMenuView"), model);
	var sideSummaryView = new SideSummaryView($("#sideSummaryView"), model)


	//Create controllers
	var sideSummaryController = new SideSummaryController(sideSummaryView, model);
	var searchViewController = new SearchViewController(searchView, model);

});