import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../Models/UserModal.js'

// @desc Authenticated user & get token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}

// @desc Protection middleware
const Protect = asyncHandler(async(req, res, next) => {
    let token;
    // Check if token exists in headers
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        // Set token from Bearer token in header
        try {
            token = req.headers.authorization.split(" ")[1]
            // Verify token and get user id
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get user id from coded token
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    }

    // If token doesnt exist in headers send error
    if(!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

export {generateToken, Protect}