import express from 'express'
import { Admin, Protect } from '../Middlewares/Auth.js'
import * as MealsController from '../Controllers/MealController.js'

const router = express.Router()

/*----- Public Routes -----*/
router.get('/', MealsController.getMeals)
router.get('/:id', MealsController.getMealById)
router.get('/rated/top', MealsController.getTopRatedMeals)

/*----- Private Routes -----*/
router.post('/:id/reviews', Protect, MealsController.createMealReview)

/*----- Admin Routes -----*/
router.put('/:id', Protect, Admin, MealsController.updateMeal)
router.delete('/:id', Protect, Admin, MealsController.deleteMeal)
router.delete('/', Protect, Admin, MealsController.deleteAllMeals)
router.post('/', Protect, Admin, MealsController.createMeal)

export default router