//ExampleView Object constructor
var SearchResultView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//this.searchResultContainer = container.find("#searchResultView");
	this.allDishes = model.getAllDishes(model.getSearchDish());


	for(var i = 0; i < this.allDishes.length; i++){
		var dish = this.allDishes[i];
		var dishImage = document.createElement('img');
		dishImage.src = "images/"+dish.image;
		var dishTitleAndDescription = document.createElement('div');
		dishTitleAndDescription.innerHTML = "<b>"+dish.name+"</b><br>"+dish.description;

		var column = document.createElement('div');
		column.className ="col-xs-2";

		var panel = document.createElement('div');
		panel.className = "panel panel-default recipePanel";

		var panelBody = document.createElement('div');
		
		panelBody.style.height = "240px";
		panelBody.className = "panel-body";
		panelBody.appendChild(dishImage);
		panelBody.appendChild(dishTitleAndDescription);
		//panelBody.innerHTML = dish.name;


		panel.appendChild(panelBody);
		column.appendChild(panel);
		//console.debug(panelBody.innerHTML);
		container.append(column);





	}
	
	
	
}
 
