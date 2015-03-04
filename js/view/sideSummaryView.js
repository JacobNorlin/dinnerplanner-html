var SideSummaryView = function(container , model){

	var self = this;

	this.peoplePlannerView = container.find("#peoplePlannerView");
	this.mealListView = container.find("#mealListView");
	this.confirmPurchaseView = container.find("#confirmPurchaseView");


	model.addObserver(this);


	this.createPeoplePlanner = function(){

		var html = $("<div class='col-xs-12'>\
						<h2>My Dinner</h2>\
						<div id='numberofGuestsView'>\
							<div>\
								Number of guests: "+model.getNumberOfGuests()+"\
							</div>\
						</div>\
						<div>\
							<button id='minusGuest' class='btn'><span class='glyphicon glyphicon-minus'></span></button>\
							<button id='plusGuest' class='btn'><span class='glyphicon glyphicon-plus'></span></button>\
						</div>					 </div>");

		self.peoplePlannerView.html(html);


	}

	this.updatePeoplePlanner = function(){
		self.peoplePlannerView.find($("#numberofGuestsView")).html($("<div>\
																		Number of guests: "+model.getNumberOfGuests()+"\
																	</div>"))
	}

	this.createMealListView = function(){
		self.mealListView.html("");
		var mealTable = document.createElement('table');
		mealTable.className = "table";
		mealTable.id = "mealTable";
		mealTable.innerHTML = "<tr>\
								<td><b>Name</b></td>\
								<td><b>Price</b></td>\
							</tr>";
		self.mealListView.append(mealTable);

		
	}

	this.updateMealListView = function(dish){
		
		var row = document.getElementById(dish.Category+"Row");
		if(row){
			row.innerHTML = "<td>"+dish.Title+"</td>\
							 <td>"+model.getDishPrice(dish)+"SEK </td>"
		}else{
			self.mealListView.find("#mealTable").append("<tr id='"+dish.Category+"Row'><td>"+dish.Title+"</td>\
													 <td>"+model.getDishPrice(dish)+"SEK </td></tr>");
		}
		
		self.confirmPurchaseView.find("#totalMealCost").html(model.getTotalMenuPrice());

	}

	this.createConfirmPurchaseView = function(){
		var html = $("<div class='col-xs-12' id='confirmPurchaseView'>\
						<div>\
							<h2>Total: <span id='totalMealCost'></span>\
						</div>\
						<div>\
	          				<button id='confirmPurchase' class='btn'>Confirm</span></button>\
						</div>\
					</div>");
		self.confirmPurchaseView.html(html);
	}


	this.update = function(obj, dish){
		if(obj == "numberOfGuestsChange"){
			self.updatePeoplePlanner();
			//self.createMealListView();

		}else if(obj == model.notificationEnum.selectedDishChange){
			self.updateMealListView(dish);
		}
	}

	this.createPeoplePlanner();
	this.createMealListView();
	this.createConfirmPurchaseView();





}