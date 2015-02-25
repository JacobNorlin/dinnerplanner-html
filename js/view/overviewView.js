//ExampleView Object constructor
var SummaryView = function (container, model) {
	
	//Container is #summaryView
	var summaryHeader = container.find("#summaryHeader");
	var overviewView = container.find("#overviewView");

	var dishIds = model.getFullMenu();

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

		for(var dishId in dishIds){

			if(dishIds[dishId] == 0){
				continue;
			}
			var dish = model.getDish(dishIds[dishId]);

			recipeCard = self.createRecipeCard(dish);
			
			var panelCol =  document.createElement('div');
			panelCol.className = "col-xs-2 col-vp-push-3";
			panelCol.appendChild(recipeCard);

			//PRICE
			var priceCol =  document.createElement('div');
			priceCol.className = "col-xs-2 priceDiv";
			priceCol.innerHTML = model.getDishPrice(dish.id)+" SEK";

			row.appendChild(panelCol);
			row2.appendChild(priceCol);
		}

		var totalPriceCol = document.createElement('div');
		totalPriceCol.className = "col-xs-2 priceDiv totalPriceDiv";
		totalPriceCol.innerHTML = model.getTotalMenuPrice()+" SEK";
		row2.appendChild(totalPriceCol);

		var buttonDiv = self.createPrintButton();

		overviewView.append(row);
		overviewView.append(row2);
		overviewView.append(buttonDiv);

		console.debug(row)

	}

	this.createPrintButton = function(){
		var buttonDiv = document.createElement('div');
		buttonDiv.class ="col-xs-4 col-push-4 ";
		var backButton = document.createElement('button');
		backButton.type="button";
		backButton.className = "btn btn-default btn-lg";
		backButton.ariaLabel="Left Align"
		console.log(backButton);
		backButton.innerHTML = "Print full recipe";

		buttonDiv.appendChild(backButton);
		return buttonDiv;
	}

	this.createRecipeCard = function(dish){

		var dishImg =  document.createElement('img');
		dishImg.src = "images/"+dish.image;
		dishImg.className="img-responsive center-block";

		var recipeCard = document.createElement('div');
		var recipeImage = document.createElement('div');
		var recipeName = document.createElement('div');

		recipeCard.className = "recipeCard";
		recipeImage.className = "recipeImage";
		recipeName.className = "recipeName";

		recipeImage.appendChild(dishImg);
		recipeName.innerHTML = dish.name;

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


	this.setupHeader = function(){
		summaryHeader.html("My dinner for: "+model.getNumberOfGuests());
	}
	

	this.setupOverview();
	this.setupHeader();
	
	
}
 
