//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var self = this;
	this.numberOfGuests = 1;
	this.selectedDishes = {
	};
	//Id of currentyl selectedDish
	this.currentDish;
	this.filterText ="";

	this.notificationEnum = {
		newSearchResult: "newSearchResult",
		numberOfGuestsChange: "numberOfGuestsChange",
		currentDishChange: "currentDishChange",
		selectedDishChange: "selectedDishChange",
		filterTextChange: "filterTextChange",
		searchResultUpdate: "searchResultUpdate",
		individualRecipeUpdate: "individualRecipeUpdate"
	}

	this.observers = [];

	this.setSelectedDish = function(type, dish){
		self.selectedDishes[type] = dish;
		notifyObservers(self.notificationEnum.selectedDishChange, dish);
	}

	this.addObserver = function(obs){
		self.observers.push(obs);
	}

	var notifyObservers = function(obj, data){
		 $.each(self.observers, function(index, value){
		 	value.update(obj, data);
		 })
	}

	this.setFilterText = function(val){
		self.filterText = val.toLowerCase();
		notifyObservers(self.notificationEnum.filterTextChange);
	}

	this.getFilterText = function(val){
		return self.filterText;
	}


	this.searchDish = "Main Course";

	this.getCurrentDish = function(){
		return self.currentDish;
	}

	this.setCurrentDish = function(dish){
		
		self.currentDish = dish;
		//notifyObservers(self.notificationEnum.currentDishChange);
	}

	

	this.getSearchDish = function(){
		return self.searchDish;
	}

	this.setSearchDish = function(type){
		self.searchDish = type;
		notifyObservers(self.notificationEnum.newSearchResult);
	}

	this.setNumberOfGuests = function(num) {
		self.numberOfGuests = num;
		notifyObservers(self.notificationEnum.numberOfGuestsChange);
		//TODO Lab 2
	}

	// should return 
	this.getNumberOfGuests = function() {
		return self.numberOfGuests;
		//TODO Lab 2
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return self.selectedDishes[type];
		//TODO Lab 2
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {

		return self.selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//return array
		var ingredients = {
		};

		$.each(self.selectedDishes, function(index, dish){
			var dishType = dish.Category;
			ingredients.dishType = dish.Ingredients;
		})

		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = self.getAllIngredients();
		var sum = 0;

		$.each(self.selectedDishes, function(index, dish){
			sum+=self.getDishPrice(dish);
		})

		return sum;
		//TODO Lab 2
	}

	this.getDishPrice = function(dish){
		var sum = 0;
		$.each(dish.Ingredients, function(index, value){
			sum += value.Price;
		})
		
		
		return sum;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var dish = self.getDish(id);
		self.selectedDishes[dish["type"]] = id;
		//TODO Lab 2 
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var dish = self.getDish(id);
		self.selectedDishes[dish["type"]] = 0;
		//TODO Lab 2
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.toLowerCase().indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.toLowerCase().indexOf(filter) != -1)
			{
				found = true;
			}
		}
		if(type == "all"){
			return dish && found;
		}else{
			return dish.type == type && found;	
		}
	  	
	  });	
	}

	this.getAllDishesJson = function() {
		var apiKey = "dvxzUl57TpT2oAV9h288wTuTCEEQE8z8";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&any_kw="
		+self.getFilterText() + " " +self.getSearchDish()
		+"&api_key=" + apiKey;

		$.ajax({
		         type: "GET",
		         dataType: 'json',
		         cache: false,
		         url: url,
		         success: function (data) {
		         	self.searchResult = data;
		            notifyObservers(self.notificationEnum.searchResultUpdate, data);
		        	}
         });
   }

    this.getDish = function(id){
    	var apiKey = "dvxzUl57TpT2oAV9h288wTuTCEEQE8z8";
		var url = "http://api.bigoven.com/recipe/" + id + "?api_key="+apiKey;

		$.ajax({
		         type: "GET",
		         dataType: 'json',
		         cache: false,
		         url: url,
		         success: function (data) {
		         	

		         	//Set dish prices
		         	$.each(data.Ingredients, function(index, value){
		         		value.Price = Math.floor((Math.random() * 100) + 1);
		         	})

		         	self.setCurrentDish(data);

		         	notifyObservers(self.notificationEnum.individualRecipeUpdate, data);
		        	}
 		});
   }

	//function that returns a dish of specific ID
	//this.getDish = function (id) {
	// for(key in dishes){
	//		if(dishes[key].id == id) {
	//			return dishes[key];
	//		}
	//	}
	//}

	this.searchResult;



}