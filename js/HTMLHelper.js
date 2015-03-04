var HTMLHelper = function(model){
	this.createRecipeTable = function(dish){


	 	var recipeTable = document.createElement('table');
	 	recipeTable.className = "table";

	 	var labelRow = document.createElement('tr');
	 	labelRow.innerHTML = "<td><b>Name</b></td><td><b>Quantity</b></td><td><b>Unit</b></td><td><b>Price</b></td>"
	 	recipeTable.appendChild(labelRow);

	 	$.each(dish.Ingredients, function(index, ingredient){
	 		var row = document.createElement('tr');
	 		
	 		row.innerHTML = "<td>"+ingredient.Name+"</td>\
	 						   <td>"+ingredient.Quantity*model.getNumberOfGuests()+"</td>\
	 						   <td>"+ingredient.Unit+"</td>\
	 						   <td>"+ingredient.Price*model.getNumberOfGuests()*ingredient.Quantity+" SEK</td>"

	 	
	 		recipeTable.appendChild(row);
	 	})


	 	var totalRow = document.createElement('tr');
	 	totalRow.innerHTML = "<td></td><td></td><td><b>Total:</b></td><td>"+model.getDishPrice(dish)+" SEK</td>"
	 	recipeTable.appendChild(totalRow);

	 	return recipeTable;
	}	
}
