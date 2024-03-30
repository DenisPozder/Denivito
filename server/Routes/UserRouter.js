import express from 'express'
import { addLikedMeal, changeUserPassword, deleteLikedMeals, deleteUserProfile, getLikedMeals, loginUser, registerUser, updateUserProfile } from '../Controllers/UserController.js'
import { Protect } from '../Middlewares/Auth.js'

const router = express.Router()

/*----- Public Routes -----*/
router.post('/', registerUser)
router.post('/login', loginUser)

/*----- Private Routes -----*/
router.put('/', Protect, updateUserProfile)
router.delete('/', Protect, deleteUserProfile)
router.put('/password', Protect, changeUserPassword)
router.get('/favorites', Protect, getLikedMeals)
router.post('/favorites', Protect, addLikedMeal)
router.delete('/favorites', Protect, deleteLikedMeals)

export default router