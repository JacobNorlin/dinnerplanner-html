//ExampleView Object constructor
var SummaryView = function (container, model) {
	
	//Container is #summaryView
	var summaryHeader = container.find("#summaryViewHeader");
	var overviewView = container.find("#overviewView");
	var printRecipeView = container.find("#printRecipeView");

	var dishes = model.getFullMenu();

	//row.appendChild(paddingCol);
	//row2.appendChild(paddingCol);

	var self = this;


	


	this.setupOverview = function(){


		var row = document.createElement('div');
		var row2 = document.createElement('div');
		row2.className = "row";
		row.className = "row";
		var paddingCol = document.createElement('div');
		paddingCol.className = "col-xs-3";


		$.each(dishes, function(index, dish){

			recipeCard = self.createRecipeCard(dish);
			
			var panelCol =  document.createElement('div');
			panelCol.className = "col-xs-2 col-vp-push-3";
			panelCol.appendChild(recipeCard);

			//PRICE
			var priceCol =  document.createElement('div');
			priceCol.className = "col-xs-2 priceDiv";
			priceCol.innerHTML = model.getDishPrice(dish)*model.getNumberOfGuests()+" SEK";

			row.appendChild(panelCol);
			row2.appendChild(priceCol);
		})


		var totalPriceCol = document.createElement('div');
		totalPriceCol.className = "col-xs-2 priceDiv totalPriceDiv";
		totalPriceCol.innerHTML = model.getTotalMenuPrice()*model.getNumberOfGuests()+" SEK";
		row2.appendChild(totalPriceCol);

		var buttonDiv = self.createButton("btn btn-default btn-lg col-xs-12", "printRecipeButton", "Print full recipe");

		

		overviewView.append(row);
		overviewView.append(row2);
		overviewView.append(buttonDiv);



		console.debug(row)

	}
	this.setupHeader = function(){
		var backButton = self.createButton("btn btn-default btn-lg", "backToSearchViewButton", "Edit recipe")
		console.debug(backButton)
		
		summaryHeader.append("<div class='col-xs-10'> <h2>My dinner for: "+model.getNumberOfGuests()+"</h2></div>");
		summaryHeader.append(backButton);
	}

	this.setup = function(){
		self.setupHeader();
		self.setupOverview();
		self.printRecipeButton = $("#printRecipeButton");
		self.backButton = $("#backToSearchViewButton");
	}

	this.createButton = function(className, id, label){
		var buttonDiv = document.createElement('div');
		var button = document.createElement('button');
		button.type="button";
		button.className = className;
		button.ariaLabel="Left Align"
		button.innerHTML = label;
		button.id = id;

		buttonDiv.appendChild(button);
		return buttonDiv;
	}

	this.createRecipeCard = function(dish){

		var dishImg =  document.createElement('img');
		dishImg.src = dish.HeroPhotoUrl;
		dishImg.className="img-responsive center-block";

		var recipeCard = document.createElement('div');
		var recipeImage = document.createElement('div');
		var recipeName = document.createElement('div');

		recipeCard.className = "recipeCard";
		recipeImage.className = "recipeImage";
		recipeName.className = "recipeName";

		recipeImage.appendChild(dishImg);
		recipeName.innerHTML = dish.Title;

		recipeCard.appendChild(recipeImage);
		recipeCard.appendChild(recipeName);
		return recipeCard;
	}

	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.hideOverviewView = function(){
		overviewView.html("");
	}

	this.killView = function(){
		summaryHeader.html("");
		overviewView.html("");
		printRecipeView.html("");

	}


	

	this.setup();
	
	
}
 
