import asyncHandler from "express-async-handler";
import User from "../Models/UserModal.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../Middlewares/Auth.js";

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, image } = req.body;

  try {
    const userExists = await User.findOne({ email });
    // Check if user exists
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in DB
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      image,
    });

    // If user created successfully send user data and token to client
    if (user) {
      res.status(201).json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user in DB
    const user = await User.findOne({ email });
    // If user exists compare password with hashed password then send user data and token to client
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        userName: user.userName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
      // If user not found or password not match send error message
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*------ Private Controllers ------*/

// @desc Update profile
// @route PUT /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { userName, email, image } = req.body;

  try {
    // Find user in DB
    const user = await User.findById(req.user._id);
    // If user exists update user data and save it in DB
    if (user) {
      user.userName = userName || user.userName;
      user.email = email || user.email;
      user.image = image || user.image;

      const updatedUser = await user.save();
      // Send updated user data and token to client
      res.json({
        _id: updatedUser._id,
        userName: updatedUser.userName,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
      // Else send error message
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete profile
// @route DELETE /api/users
// @access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
  try {
    // Find user in DB
    const user = await User.findById(req.user._id);
    // If user exists delete user from DB
    if (user) {
      // If user is admin throw error message
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Cant delete admin user");
      }
      // Else delete user from DB
      await user.deleteOne();
      res.json({ message: "User deleted successfully" });
    }
    // Else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Change password
// @route PUT /api/users/password
// @access Private
const changeUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    // Find user in DB
    const user = await User.findById(req.user._id);
    // If user exists compare old password with hashed password then update user password and save it in DB
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({ message: "Password changed!" });
      // Else send error message
    } else {
      res.status(401);
      throw new Error("Invalid old password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Get all liked meals
// @route GET /api/users/favorites
// @access Private
const getLikedMeals = asyncHandler(async (req, res) => {
  try {
    // Find user in DB
    const user = await User.findById(req.user._id).populate("likedMeals");
    // If user exists send liked meals to client
    if (user) {
      res.json(user.likedMeals);
    }
    // Else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Add meal to liked meals
// @route PUT /api/users/favorites
// @access Private
const addLikedMeal = asyncHandler(async (req, res) => {
  const { mealId } = req.body;
  try {
    // Find user in DB
    const user = await User.findById(req.user._id);
    // If user already exists add meal to liked meals and save in DB
    if (user) {
      // Check if meal already exists
      // If meal already liked send error message
      if (user.likedMeals.includes(mealId)) {
        res.status(400);
        throw new Error("Meal already exist");
      }
      // Else add meal to liked meals and save it in DB
      user.likedMeals.push(mealId);
      await user.save();
      res.json(user.likedMeals);
    }
    // Else send error message
    else {
      res.status(404);
      throw new Error("Meal not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete all liked meals
// @route DELETE /api/users/favorites
// @access Private
const deleteLikedMeals = asyncHandler(async (req, res) => {
  try {
    // Find user in DB
    const user = await User.findById(req.user._id);
    // If user exists delete all liked meals and save it in DB
    if (user) {
      user.likedMeals = [];
      await user.save();
      res.json({ message: "All liked meals deleted successfully!" });
    }
    // Else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*------ Admin Controllers ------*/

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    // Find all users in DB
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  try {
    // Find user in DB
    const user = await User.findById(req.params.id);
    // If user exists delete user from DB
    if (user) {
      // If user is admin throw error message
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Cant delete admin user");
      }
      // Else delete user from DB
      await user.deleteOne();
      res.json({ message: "User deleted successfully" });
    }
    // Else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  registerUser,
  loginUser,
  updateUserProfile,
  deleteUserProfile,
  changeUserPassword,
  getLikedMeals,
  addLikedMeal,
  deleteLikedMeals,
  getAllUsers,
  deleteUser,
};
