//ExampleView Object constructor
var SearchView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dropDownMenu = container.find("#dropDownView");
	this.dropDownMenuItems = container.find("#menuSelection");
	
	console.debug(this.dropDownMenuItems);


    this.dropDownMenuItems.append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Starter</a></li>');   
    this.dropDownMenuItems.append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Main</a></li>');   
    this.dropDownMenuItems.append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Dessert</a></li>');   
}
 
