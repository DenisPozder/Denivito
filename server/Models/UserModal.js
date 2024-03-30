import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please enter a username"]
    },
    email: {
        type: String,
        required: [true, "Please enter an valid email address"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Password must be at least 6 characters long"]
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    likedMeals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal",
        }
    ]
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema)