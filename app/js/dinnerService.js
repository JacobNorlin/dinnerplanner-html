// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  //DinnerModel Object constructor
  var self = this;


  var currentDish;
  var lastSearchTerm ="";
  var rpp = 15;
  var scrolls = 1;
  var selectedDishes = {};


  var numberOfGuests = $cookieStore.get('numberOfGuests');



  this.setSelectedDish = function(type, dish){
    selectedDishes[type] = dish;
  }


  this.setLastSearchTerm = function(val){
    scrolls = 1;
    if(!val){
      return;
    }
    lastSearchTerm = val.toLowerCase();
  }

  this.getLastSearchTerm = function(val){
    return lastSearchTerm;
  }


  this.getCurrentDish = function(){
    return currentDish;
  }

  this.setCurrentDish = function(dish){   
    currentDish = dish;
  }


  this.setNumberOfGuests = function(num) {
    $cookieStore.put('numberOfGuests', num);
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
    var sum = 0;

    $.each(self.getFullMenu(), function(index, dish){
      sum+=self.getDishPrice(dish);
    })

    return sum;
    //TODO Lab 2
  }

  this.getDishPrice = function(dish){
    //I dint like this
    if(!dish){
      return 0;
    }
    var sum = 0;
    console.debug(dish);
    $.each(dish.Ingredients, function(index, value){
      sum += value.Price*self.getNumberOfGuests();
    })
    
    
    return sum;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
    
    

    if(!dish.Ingredients){
      self.Dish.get({id:dish.RecipeID},
        function(data){
          $.each(data.Ingredients, function(index, ingredient){
            ingredient.Price = 10;
          });

          data.Price = self.getDishPrice(data); 
          selectedDishes[dish.RecipeID] = data;
          $cookieStore.put('selectedDishes', cookiefySelectedDishes());
        }
      );
    }else{
      selectedDishes[dish.RecipeID] = dish;
      $cookieStore.put('selectedDishes', cookiefySelectedDishes());
    }
    
    
  }



  //Removes dish from menu
  this.removeDishFromMenu = function(dish) {
    
    delete selectedDishes[dish.RecipeID];
    $cookieStore.put('selectedDishes', cookiefySelectedDishes());
  }
  //Converts to an object containing all recipeids
  var cookiefySelectedDishes = function(){
    var newObj = {};
    $.each(self.getFullMenu(), function(index, dish){
      newObj[dish.RecipeID] = {'RecipeID':dish.RecipeID};
    });
    return newObj;
  }
  //Adds all the saved dishes to menu again
  var deCookiefySelectedDishes = function(dishes){
    if(dishes){
        $.each(dishes, function(index, dish){
          self.addDishToMenu(dish);
        });}
  }

  var apiKey = "dvxzUl57TpT2oAV9h288wTuTCEEQE8z8";

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:5,api_key:apiKey});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:apiKey}); 

  deCookiefySelectedDishes($cookieStore.get('selectedDishes'));
  $cookieStore.put('selectedDishes', selectedDishes);






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