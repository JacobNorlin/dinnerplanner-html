//ExampleView Object constructor
var SearchResultView = function (container, model) {
	
	var self = this;
	this.container = container;
	
	model.addObserver(this);

	this.update = function(obj){
		if(obj == "newSearchResult"){
			self.clearSearchResults()
			self.createSearchResult(model.getSearchDish());
		}
	}
	

	this.createSearchResult = function(searchDish){
		this.allDishes = model.getAllDishes(searchDish);
		for(var i = 0; i < this.allDishes.length; i++){
			var recipeCard = self.createRecipeCard(self.allDishes[i]);
			var column = document.createElement('div');
			column.className ="col-xs-2";
			column.appendChild(recipeCard);
			self.container.append(column);
			console.debug(recipeCard);

		}
	}

	this.clearSearchResults = function(){
		container.html("");
	}

	this.createRecipeCard = function(dish){

		var dishImage = document.createElement('img');
		dishImage.src = "images/"+dish.image;
		var dishTitleAndDescription = document.createElement('div');
		dishTitleAndDescription.innerHTML = "<b>"+dish.name+"</b><br>"+dish.description;

		

		var panel = document.createElement('div');
		panel.className = "panel panel-default recipePanel";

		var panelBody = document.createElement('div');
		
		panelBody.style.height = "240px";
		panelBody.className = "panel-body";
		panelBody.appendChild(dishImage);
		panelBody.appendChild(dishTitleAndDescription);
		//panelBody.innerHTML = dish.name;


		panel.appendChild(panelBody);

		return panel;

	}	
	
}
 
