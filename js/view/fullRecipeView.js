//ExampleView Object constructor
var FullRecipeView = function (container, model) {
	


	var dishIds = model.getFullMenu();

	for(var dishId in dishIds){

		if(dishIds[dishId] == 0){
			continue;
		}

		var dish = model.getDish(dishIds[dishId]);

		var row = document.createElement('div');
		row.className = "row recipeRow";



		var picCol =  document.createElement('div');
		picCol.className = "col-xs-2";

		var ingrdCol =  document.createElement('div');
		ingrdCol.className = "col-xs-5";

		var prepCol =  document.createElement('div');
		prepCol.className = "col-xs-5";

		var dishImg =  document.createElement('img');
		dishImg.src = "images/"+dish.image;

		

		var ingrdDiv = document.createElement('div');
		ingrdDiv.id = "ingrdDiv";
		var ingredients = app.HTMLHelper.createRecipeTable(dish);
		ingrdDiv.innerHTML = "<h2>"+dish.name+"</h2><br>";
		ingrdDiv.appendChild(ingredients);

		var prepDiv = document.createElement('div');
		prepDiv.id = "prepDiv";
		prepDiv.innerHTML = "<h2>Preparation</h2><br>"+dish.description;

		ingrdCol.appendChild(ingrdDiv);
		prepCol.appendChild(prepDiv);
		picCol.appendChild(dishImg);


		row.appendChild(picCol);
		row.appendChild(ingrdCol);
		row.appendChild(prepCol);

		container.append(row);
	}



	
	
	
}
 
