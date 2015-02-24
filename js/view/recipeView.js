//ExampleView Object constructor
var RecipeView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//this.searchResultContainer = container.find("#searchResultView");
	this.selectedDish = model.getSelectedDish(model.getSearchDish());
	this.leftSide = container.find("#recipeLeftSide");
	this.rightSide = container.find("#recipeRightSide");


	var dish = model.getDish(model.getSelectedDish(model.getSearchDish()));

	//SET UP RIGHT SIDE

	var recipePanel = document.createElement('div');
	recipePanel.className = "panel panel-default";

 	var panelBody = document.createElement('div');
 	var panelHeading = document.createElement('div');

 	panelHeading.className = "panel-heading";
 	panelHeading.innerHTML = "INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE";

 	//create recipe table
 	var recipeTable = document.createElement('table');
 	recipeTable.className = "table";
 	var currentDishIngredients = dish.ingredients;
 	for(var i = 0; i < currentDishIngredients.length; i++){
 		console.debug(currentDishIngredients[i]);

 		var row = document.createElement('tr');
 		
 		for(var c in currentDishIngredients[i]){
 			var column = document.createElement('td');
 			column.innerHTML = currentDishIngredients[i][c];
 			row.appendChild(column);
 		}
 		recipeTable.appendChild(row);
 	}

 	var backButton = document.createElement('button');
	backButton.type="button";
	backButton.className = "btn btn-default btn-lg";
	backButton.ariaLabel="Left Align"
	console.log(backButton);
	backButton.innerHTML = "Confirm Dish";


		
	panelBody.className = "panel-body";
	panelBody.appendChild(recipeTable);
	panelBody.appendChild(backButton);

	recipePanel.appendChild(panelHeading);
	recipePanel.appendChild(panelBody);
	

	this.rightSide.append(recipePanel);


	//LEFT SIDE
	var dishTitleAndDescription = document.createElement('div');
	dishTitleAndDescription.innerHTML = "<h2>"+dish.name+"</h2><br><img src='images/"+dish.image+"'</img><br>"+dish.description;

	var backButton = document.createElement('button');
	backButton.type="button";
	backButton.className = "btn btn-default btn-lg";
	backButton.ariaLabel="Left Align"
	console.log(backButton);
	backButton.innerHTML = "Go back";
	var buttonSpan = document.createElement('span');
	buttonSpan.className = 'glyphicon glyphicon-chevron-left';
	backButton.appendChild(buttonSpan);

	this.leftSide.append(dishTitleAndDescription);
	this.leftSide.append(backButton);

	
	
	
}
 
