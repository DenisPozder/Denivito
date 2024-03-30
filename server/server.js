import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './Config/db.js'
import userRouter from './Routes/UserRouter.js'
import { ErrorHandler } from './Middlewares/ErrorMiddleware.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Connect DB
connectDB()

// Main route
app.get('/', (req, res) => {
    res.send("API is running...")
})

// Other routes
app.use('/api/users', userRouter)

// Error handling middleware
app.use(ErrorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in http://localhost/${PORT}`)
})