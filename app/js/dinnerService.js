// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

  //DinnerModel Object constructor
  var self = this;
  var selectedDishes = {
  };

  var currentDish;
  var filterText ="";
  var rpp = 15;
  var scrolls = 1;


  var numberOfGuests = 2;



  this.setSelectedDish = function(type, dish){
    selectedDishes[type] = dish;
  }


  this.setFilterText = function(val){
    scrolls = 1;
    filterText = val.toLowerCase();
  }

  this.getFilterText = function(val){
    return filterText;
  }


  this.getCurrentDish = function(){
    return currentDish;
  }

  this.setCurrentDish = function(dish){   
    currentDish = dish;
  }


  this.setNumberOfGuests = function(num) {
    numberOfGuests = num;
  }

  // should return 
  this.getNumberOfGuests = function() {
    return numberOfGuests;
  }

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function(type) {
    return selectedDishes[type];
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {

    return selectedDishes;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    //return array
    var ingredients = {
    };

    $.each(selectedDishes, function(index, dish){
      var dishType = dish.Category;
      ingredients.dishType = dish.Ingredients;
    })

    return ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var ingredients = self.getAllIngredients();
    var sum = 0;

    $.each(self.selectedDishes, function(index, dish){
      sum+=self.getDishPrice(dish);
    })

    return sum;
    //TODO Lab 2
  }

  this.getDishPrice = function(dish){
    var sum = 0;
    $.each(dish.Ingredients, function(index, value){
      sum += value.Price;
    })
    
    
    return sum;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    var dish = self.getDish(id);
    selectedDishes[dish["type"]] = id;
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    var dish = self.getDish(id);
    selectedDishes[dish["type"]] = 0;
  }

  var apiKey = "dvxzUl57TpT2oAV9h288wTuTCEEQE8z8";

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:apiKey});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:apiKey}); 








  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});