var app = {};

$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	console.debug("Loading site...");

	app.HTMLHelper = new HTMLHelper(model)

	var searchResultView = new SearchResultView($("#searchView"), model);
	var recipeView = new RecipeView($("#recipeView"), model );

	recipeView.hideView();

	var sideSummaryView = new SideSummaryView($("#sideSummaryView"), model)


	//Create controllers
	var sideSummaryController = new SideSummaryController(sideSummaryView, model);
	var searchViewController = new SearchViewController(searchResultView, model);
	var searchResultViewController = new SearchResultViewController(searchResultView, model);
	var recipeViewController = new RecipeViewController(recipeView, model);

	$("#summaryView").hide();



});

