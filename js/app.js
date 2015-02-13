$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	console.debug(model);

	console.debug(model.getTotalMenuPrice());
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
	var searchView = new SearchView($("#dropDownView"));
	var searchResultView = new SearchResultView($("#searchResultView"), model);

});