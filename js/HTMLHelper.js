var HTMLHelper = function(model){
	this.createRecipeTable = function(dish){
	 	var recipeTable = document.createElement('table');
	 	recipeTable.className = "table";
	 	var currentDishIngredients = dish.ingredients;

	 	var labelRow = document.createElement('tr');
	 	labelRow.innerHTML = "<td><b>Name</b></td><td><b>Quantity</b></td><td><b>Unit</b></td><td><b>Price</b></td>"
	 	recipeTable.appendChild(labelRow);

	 	for(var i = 0; i < currentDishIngredients.length; i++){

	 		var row = document.createElement('tr');
	 		
	 		row.innerHTML = "<td>"+currentDishIngredients[i].name+"</td>\
	 						   <td>"+currentDishIngredients[i].quantity*model.getNumberOfGuests()+"</td>\
	 						   <td>"+currentDishIngredients[i].unit+"</td>\
	 						   <td>"+currentDishIngredients[i].price*model.getNumberOfGuests()+" SEK</td>"

	 	
	 		recipeTable.appendChild(row);
	 	}

	 	var totalRow = document.createElement('tr');
	 	totalRow.innerHTML = "<td></td><td></td><td><b>Total:</b></td><td>"+model.getDishPrice(dish.id)+" SEK</td>"
	 	recipeTable.appendChild(totalRow);

	 	return recipeTable;
	}	
}
