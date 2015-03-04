//ExampleView Object constructor
var SearchResultView = function (container, model) {
	
	var self = this;

	this.searchResultView = container.find("#searchResultView");
	this.searchBarView = container.find("#searchBarView");



	this.dropDownMenu = this.searchBarView.find("#dropDownMenu");
	this.searchBar = this.searchBarView.find("#searchBar");

	
	model.addObserver(this);

	this.currentRecipeCards = [];

	this.update = function(obj, data){
		if(obj == "newSearchResult"){
			self.clearSearchResults()
			self.doSearch("");

		}else if(obj == model.notificationEnum.filterTextChange){
			self.clearSearchResults();
			self.doSearch(model.getFilterText());
			console.debug(model.getFilterText())
		}else if(obj == model.notificationEnum.searchResultUpdate){
			console.debug(data)
			self.createAllRecipeCards(data.Results);

		}
	}

	this.hideView = function(){
		container.hide();
	}

	this.doSearch = function(filterText){
		model.getAllDishesJson(filterText);
	}

	this.createAllRecipeCards = function(searchResults){
		for(var i = 0; i < searchResults.length; i++){
			var recipeCard = self.createRecipeCard(searchResults[i]);
			var column = document.createElement('div');
			column.className ="col-xs-2";
			column.appendChild(recipeCard);
			self.searchResultView.append(column);

		}
	}
	


	this.clearSearchResults = function(){
		self.searchResultView.html("");
		self.currentRecipeCards = [];
	}

	this.createRecipeCard = function(dish){

		var dishImage = document.createElement('img');
		dishImage.src = dish.HeroPhotoUrl;
		dishImage.setAttribute("dishId", dish.RecipeID);
		dishImage.className = "img-responsive center-block";
		var dishTitleAndDescription = document.createElement('div');
		dishTitleAndDescription.innerHTML = "<b>"+dish.Title+"</b><br>"+dish.description;

		

		var panel = document.createElement('div');
		panel.className = "panel panel-default recipePanel";

		var panelBody = document.createElement('div');
		
		panelBody.style.height = "240px";
		panelBody.className = "panel-body";
		panelBody.appendChild(dishImage);
		panelBody.appendChild(dishTitleAndDescription);
		//panelBody.innerHTML = dish.name;


		panel.appendChild(panelBody);

		self.currentRecipeCards.push(panel);

		return panel;

	}	

	this.createSearchBar = function(){
		var html = $("<h2>SELECT DISH:</h2>\
					<div>\
          				<input type='text' class='input-medium search-query' name='s' placeholder='Search' value='' id='searchBarInput'>\
					</div>");

		self.searchBar.html(html);

		self.searchBarInput = self.searchBar.find("#searchBarInput");
	}

	this.createDropDownMenu = function(){

		var html = $("<div id='dropDownView'>\
						  <button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-expanded='true'>\
						   Choose Dish\
						   <span class='caret'></span>\
						  </button>\
						  <ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1' id='menuSelection'>\
						  <li role='presentation'><a role='menuitem' tabindex='-1' href='#' id='starterButton'>Starter</a></li>\
						   <li role='presentation'><a role='menuitem' tabindex='-1' href='#' id='mainButton'>Main</a></li>\
						   <li role='presentation'><a role='menuitem' tabindex='-1' href='#'id='dessertButton'>Dessert</a></li>\
						  </ul>\
					</div>");

		self.dropDownMenu.html(html);

		self.starterButton = self.dropDownMenu.find("#starterButton");
		self.mainButton = self.dropDownMenu.find("#mainButton");
		self.dessertButton = self.dropDownMenu.find("#dessertButton");


	}

	this.createSearchBar();
	this.createDropDownMenu();
	this.doSearch(model.getSearchDish())
	
}
 
