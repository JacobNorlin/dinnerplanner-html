var SideSummaryView = function(container , model){

	var self = this;

	this.peoplePlannerView = container.find("#peoplePlannerView");


	this.createPeoplePlanner = function(){

		var html = $('<h2>My Dinner</h2>
	        			<div id="exampleView">
							<div>
								Number of guests: '+model.getNumberOfGuests()'
							</div>
							<div>
		          				<button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>
								<button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
							</div>
						</div>')

	}

	


}