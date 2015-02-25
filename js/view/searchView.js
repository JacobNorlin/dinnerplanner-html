//ExampleView Object constructor
var SearchView = function (container, model) {
	

	var self = this


	this.dropDownMenu = container.find("#dropDownMenu");

	this.searchBar = container.find("#searchBar");


	this.createSearchBar = function(){
		var html = $("<h2>SELECT DISH:</h2>\
					<div>\
          				<input type='text' class='input-medium search-query' name='s' placeholder='Search' value='' id='searchBarInput'>\
					</div>");

		self.searchBar.html(html);
		self.searchBarInput = $("searchBarInput");

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
}
 
