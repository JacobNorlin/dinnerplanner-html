var SearchViewController = function(view, model){
	
	var self = this;


	view.starterButton.click(function(){
		model.setSearchDish("starter");
	})

	view.mainButton.click(function(){
		model.setSearchDish("Main Course");
	})

	view.dessertButton.click(function(){
		
		model.setSearchDish("dessert");
	})

	view.searchBarInput.keyup(function(){
		typewatch(function(){
			model.setFilterText(view.searchBarInput.val());
		}, 500)
		
	})

	//Stolen from stackoverflow, makes it so it only sends event 500ms after typing stops, prevents assload of GETs
	var typewatch = (function(){
	  var timer = 0;
	  return function(callback, ms){
	    clearTimeout (timer);
	    timer = setTimeout(callback, ms);
	  };
	})();

}