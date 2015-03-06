//ExampleView Object constructor
var OverviewView = function (container, model) {
	
	//Container is #summaryView

	var dishIds = model.getFullMenu();

	var row = document.createElement('div');
	var row2 = document.createElement('div');
	row2.className = "row";
	row.className = "row";
	var paddingCol = document.createElement('div');
	paddingCol.className = "col-xs-3";
	//row.appendChild(paddingCol);
	//row2.appendChild(paddingCol);

	for(var dishId in dishIds){

		var dish = model.getDish(dishIds[dishId]);

		var dishImg =  document.createElement('img');
		dishImg.src = "images/"+dish.image;
		dishImg.className="img-responsive center-block";

		var panelCol =  document.createElement('div');
		panelCol.className = "col-xs-2 col-vp-push-3";

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

		panelCol.appendChild(recipeCard);

		//PRICE

		var priceCol =  document.createElement('div');
		priceCol.className = "col-xs-2 priceDiv";
		priceCol.innerHTML = model.getDishPrice(dish.id)*model.getNumberOfGuests()+" SEK";


		



		
		row.appendChild(panelCol);
		row2.appendChild(priceCol);


		
	}

	var totalPriceCol = document.createElement('div');
	totalPriceCol.className = "col-xs-2 priceDiv totalPriceDiv";
	totalPriceCol.innerHTML = model.getTotalMenuPrice()*model.getNumberOfGuests()+" SEK";
	row2.appendChild(totalPriceCol);

	container.append(row);
	container.append(row2);



	//Create backbutton
	var buttonDiv = document.createElement('div');
	buttonDiv.class ="col-xs-4 col-push-4 ";
	var backButton = document.createElement('button');
	backButton.type="button";
	backButton.className = "btn btn-default btn-lg";
	backButton.ariaLabel="Left Align"
	console.log(backButton);
	backButton.innerHTML = "Print full recipe";

	buttonDiv.appendChild(backButton);

	container.append(buttonDiv);


	
	
	
}
 
