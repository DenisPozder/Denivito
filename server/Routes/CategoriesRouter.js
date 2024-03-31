import express from 'express'
import { Admin, Protect } from '../Middlewares/Auth.js'
import * as CategoriesController from '../Controllers/CategoriesController.js'

const router = express.Router()

/*----- Public Routes -----*/
router.get('/', CategoriesController.getCategories)

/*----- Admin Routes -----*/
router.post('/', Protect, Admin, CategoriesController.createCategory)
router.put('/:id', Protect, Admin, CategoriesController.updateCategory)
router.delete('/:id', Protect, Admin, CategoriesController.deleteCategory)

export default router