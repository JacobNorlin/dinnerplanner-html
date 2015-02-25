var SearchViewController = function(view, model){
	
	var self = this;


	view.starterButton.click(function(){
		model.setSearchDish("starter");
	})

	view.mainButton.click(function(){
		model.setSearchDish("main dish");
	})

	view.dessertButton.click(function(){
		
		model.setSearchDish("dessert");
	})

	view.searchBarInput.keyup(function(){
		model.setFilterText(view.searchBarInput.val());
	})

}