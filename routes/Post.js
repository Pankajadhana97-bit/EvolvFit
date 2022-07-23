const express = require('express');
const router = express.Router();
const { UserData, MealData, FooditemData } = require('../models/model')

router.use(express.json());

router.get('/', async (req, res) => {
    const data = await UserData.find()
    console.log(req.body)
    res.send({
        success :  data
    })
})

router.post('/user', async (req, res) => {
    const { name, calorieRequirement } = req.body;
    const dietPlan = await MealData.find()
    try {
        const user = new UserData({
            name: name,
            calorieRequirement: calorieRequirement,
            mealPlan: dietPlan
        });
        const savedUser = await user.save();
        res.json({ success: savedUser });
    }
    catch (err) {
        console.log({ Error: err })
    }
});

router.post('/meal', async (req, res) => {
    const { category, name } = req.body;
    const VarietyofItems = await FooditemData.find({category : category})
    try {
        const meal = new MealData({
            category: category,
            name: name,
            fooditems: VarietyofItems,
        });
        const savedMeal = await meal.save();
        res.json({ success: savedMeal });
    }
    catch (err) {
        console.log({ Error: err })
    }
});

router.post('/fooditemadd', async (req, res) => {
    const { category, foodItems, acceptedUnits , itemWeight } = req.body;
    
    try {
        const food = new FooditemData({
            category : category,
            foodItems : foodItems,
            acceptedUnits : acceptedUnits,
            itemWeight : itemWeight
        });
        const savedFoodItems = await food.save();
        res.json({ success: savedFoodItems });
    }
    catch (err) {
        console.log({ Error: err })
    }
}); 


module.exports = router;
