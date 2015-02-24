var SideSummaryController = function(view, model){
	
	var self = this;

	view.peoplePlannerView.find("#plusGuest").click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	

	view.peoplePlannerView.find("#minusGuest").click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()-1);

	});

}