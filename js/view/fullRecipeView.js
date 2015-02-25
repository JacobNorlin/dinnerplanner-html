//ExampleView Object constructor
var FullRecipeView = function (container, model) {
	


	var dishIds = model.getFullMenu();

	for(var dishId in dishIds){

		if(dishIds[dishId] == 0){
			continue;
		}

		var dish = model.getDish(dishIds[dishId]);

		var row = document.createElement('div');
		row.className = "row";

		var paddingCol = document.createElement('div');
		paddingCol.className = "col-xs-1";

		var picCol =  document.createElement('div');
		picCol.className = "col-xs-1";

		var descCol =  document.createElement('div');
		descCol.className = "col-xs-4";

		var prepCol =  document.createElement('div');
		prepCol.className = "col-xs-4";

		var dishImg =  document.createElement('img');
		dishImg.src = "images/"+dish.image;

		

		var descDiv = document.createElement('div');
		descDiv.id = "descDiv";
		descDiv.innerHTML = "<h2>"+dish.name+"</h2><br>"+dish.description;

		var prepDiv = document.createElement('div');
		prepDiv.id = "prepDiv";
		prepDiv.innerHTML = "<h2>Preparation</h2><br>"+dish.description;

		descCol.appendChild(descDiv);
		prepCol.appendChild(prepDiv);
		picCol.appendChild(dishImg);

		row.appendChild(paddingCol);
		row.appendChild(picCol);
		row.appendChild(descCol);
		row.appendChild(prepCol);

		container.append(row);
	}



	
	
	
}
 
