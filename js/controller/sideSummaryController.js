var SideSummaryController = function(view, model){
	
	var self = this;

	view.peoplePlannerView.find("#plusGuest").click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	

	view.peoplePlannerView.find("#minusGuest").click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()-1);

	});

	view.confirmPurchaseView.find("#confirmPurchase").click(function(){
		if(model.getTotalMenuPrice() == 0){
			return;
		}
		$("#fullSearchView").hide();
		var asdf = new SummaryView($("#summaryView"), model);
		$("#summaryView").show();
		new SummaryViewController(asdf, model);
	})

}