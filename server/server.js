import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './Config/db.js'
import userRouter from './Routes/UserRouter.js'
import mealRouter from './Routes/MealRouter.js'
import categoriesRouter from './Routes/CategoriesRouter.js'
import { ErrorHandler } from './Middlewares/ErrorMiddleware.js'
import UploadRouter from './Controllers/UploadFile.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(cors({
    origin: 'https://denivito-ten.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))

// Connect DB
connectDB()

// Main route
app.get('/', (req, res) => {
    res.send("API is running...")
})

// Other routes
app.use('/api/users', userRouter)
app.use('/api/meals', mealRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/upload', UploadRouter)

// Error handling middleware
app.use(ErrorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in http://localhost/${PORT}`)
})