const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fooditems = new Schema({
    // new food item data
    category : {
        type : String,
        enum : ["Breakfast","Lunch","Eveninig Snacks","Dinner"],
        default : "Breakfast",
    },
    foodItems : {
        itemName : String,
        calories : Number,
        protein : Number,
        carb : Number,
        fat : Number
    },
    acceptedUnits : {
       type : String,
       enum : ["ml","liter","kg","g","item"],
       default : "g"
     },
     itemWeight : Number
});

const Meal = new Schema({
    // new meal data
      category : {
       type : String,
       enum : ["Breakfast","Lunch","Eveninig Snacks","Dinner"],
       default : "Breakfast"
      },
      name : String,
      fooditems : [],
});

const User = new Schema({
    name : String,
    calorieRequirement : Number,
    mealPlan : []
});

const UserData  = mongoose.model('User',User);
const MealData = mongoose.model('Meal',Meal);
const FooditemData = mongoose.model('Fooditem',Fooditems);

module.exports = {
    UserData,
    MealData,
    FooditemData
}