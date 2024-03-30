import asyncHandler from 'express-async-handler'
import User from '../Models/UserModal.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../Middlewares/Auth.js'

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const {userName, email, password, image} = req.body

    try {
        const userExists = await User.findOne({ email })
        // Check if user exists
        if(userExists) {
            res.status(400)
            throw new Error("User already exists")
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create user in DB
        const user = await User.create({
            userName,
            email,
            password: hashedPassword,
            image
        })

        // If user created successfully send user data and token to client
        if (user) {
            res.status(201).json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("Invalid user data")
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    try {
        // Find user in DB
        const user = await User.findOne({ email })
        // If user exists compare password with hashed password then send user data and token to client
        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
            // If user not found or password not match send error message
        } else {
            res.status(401)
            throw new Error("Invalid email or password")
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export {registerUser, loginUser}