import express from 'express'
import { addLikedMeal, changeUserPassword, deleteLikedMeals, deleteUser, deleteUserProfile, getAllUsers, getLikedMeals, loginUser, registerUser, updateUserProfile } from '../Controllers/UserController.js'
import { Admin, Protect } from '../Middlewares/Auth.js'

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

/*----- Admin Routes -----*/
router.get('/', Protect, Admin, getAllUsers)
router.delete('/:id', Protect, Admin, deleteUser)

export default router