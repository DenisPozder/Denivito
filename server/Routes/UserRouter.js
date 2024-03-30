import express from 'express'
import { changeUserPassword, deleteUserProfile, loginUser, registerUser, updateUserProfile } from '../Controllers/UserController.js'
import { Protect } from '../Middlewares/Auth.js'

const router = express.Router()

/*----- Public Routes -----*/
router.post('/', registerUser)
router.post('/login', loginUser)

/*----- Private Routes -----*/
router.put('/', Protect, updateUserProfile)
router.delete('/', Protect, deleteUserProfile)
router.put('/password', changeUserPassword)

export default router