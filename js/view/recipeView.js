//ExampleView Object constructor
var RecipeView = function (container, model) {
	
	var self = this;

	this.leftSide = container.find("#recipeLeftSide");
	this.rightSide = container.find("#recipeRightSide");



	model.addObserver(this);

	this.update = function(obj, data){
		if(obj == model.notificationEnum.individualRecipeUpdate){
			self.showView();
			console.debug(data)
			self.leftSide.find("#dishTitleAndDescriptionDiv").html(self.createRecipeDescription(data));
			self.rightSide.find("#tableDiv").html(app.HTMLHelper.createRecipeTable(data));
		}else if(obj == model.notificationEnum.currentDishChange){
			model.getDish(model.getCurrentDish());
		}else if(obj == model.notificationEnum.numberOfGuestsChange){
			self.rightSide.find("#ingredientsHeader").html("INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE");
			self.rightSide.find("#tableDiv").html(app.HTMLHelper.createRecipeTable(model.getCurrentDish()));
		}else if(obj == model.notificationEnum.recipeLoadingError){
			self.showView();
			console.debug("actually called")
			self.leftSide.find("#dishTitleAndDescriptionDiv").html(self.createErrorPage());
			self.rightSide.find("#tableDiv").html("");
		}
	}

	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}
	


	this.createRecipePanel = function(){
		var recipePanel = document.createElement('div');
		recipePanel.className = "panel panel-default";

	 	var panelBody = document.createElement('div');
	 	var panelHeading = document.createElement('div');

	 	panelHeading.className = "panel-heading";
	 	panelHeading.id = "ingredientsHeader";
	 	panelHeading.innerHTML = "INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE";

	 	var tableDiv = document.createElement('div');
	 	tableDiv.id = "tableDiv";

	 	//tableDiv.appendChild(app.HTMLHelper.createRecipeTable(model.getDish(model.getCurrentDish())));
	 	

	 	var confirmButton = document.createElement('button');
		confirmButton.type="button";
		confirmButton.className = "btn btn-default btn-lg";
		confirmButton.ariaLabel="Left Align"
		confirmButton.innerHTML = "Confirm Dish";
		confirmButton.id = "confirmButton";



		panelBody.className = "panel-body";
		panelBody.appendChild(tableDiv);
		panelBody.appendChild(confirmButton);

		recipePanel.appendChild(panelHeading);
		recipePanel.appendChild(panelBody);

		return recipePanel;
	}

	


	this.setupRightSide = function(){
		var recipePanel = self.createRecipePanel();
		this.rightSide.append(recipePanel);
		self.confirmButton = self.rightSide.find("#confirmButton");

	}

	this.setupLeftSide = function(){
		var dishTitleAndDescription = self.createRecipeDescription({Title:"lol",HeroPhotoUrl:"lol", Description:"Lol"});

		var backButton = document.createElement('button');
		backButton.type="button";
		backButton.className = "btn btn-default btn-lg";
		backButton.ariaLabel="Left Align"
		backButton.innerHTML = "Go back";
		var buttonSpan = document.createElement('span');
		buttonSpan.className = 'glyphicon glyphicon-chevron-left';
		backButton.appendChild(buttonSpan);
		backButton.id="backButton";

		
		this.leftSide.append(dishTitleAndDescription);
		this.leftSide.append(backButton);
		self.backButton = self.leftSide.find("#backButton");
	}



	this.createRecipeDescription = function(dish){
		var dishTitleAndDescription = document.createElement('div');
		dishTitleAndDescription.id = "dishTitleAndDescriptionDiv";
		dishTitleAndDescription.innerHTML = "<h2>"+dish.Title+"</h2><small>"+dish.Category+"</small>";
		var dishImage = document.createElement('img');
		dishImage.src = dish.HeroPhotoUrl;
		dishImage.className = "img-responsive center-block";
		
		var description = document.createElement('div');
		description.innerHTML = dish.Description;

		dishTitleAndDescription.appendChild(dishImage);
		dishTitleAndDescription.appendChild(description);
		return dishTitleAndDescription;
	}

	this.createErrorPage = function(dish){
		var dishTitleAndDescription = document.createElement('div');
		dishTitleAndDescription.id = "dishTitleAndDescriptionDiv";
		dishTitleAndDescription.innerHTML = "<h2>Error getting data</h2>";
		return dishTitleAndDescription;
	}
	

	
	this.setupLeftSide();
	this.setupRightSide();
	
	
	
}
 
