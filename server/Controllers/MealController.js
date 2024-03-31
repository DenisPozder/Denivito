import Meal from "../Models/MealModal.js";
import asyncHandler from "express-async-handler";

/*----- Public Controllers -----*/

// @desc Get all meals
// @route GET /api/meals
// @access Public
const getMeals = asyncHandler(async (req, res) => {
  try {
    // Filter meals by category, rate and search
    const { category, rate, search } = req.query;
    let query = {
      ...(category && { category }),
      ...(rate && { rate }),
      ...(search && { name: { $regex: search, $options: "i" } }),
    };

    // Load more meals functionality
    const page = Number(req.query.pageNumber) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;

    // Find meals by query, skip and limit
    const meals = await Meal.find(query)
      .sort({ cratedAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total number of meals
    const count = await Meal.countDocuments(query);

    // Send response with meals and total number of meals
    res.json({
      meals,
      page,
      pages: Math.ceil(count / limit),
      totalMeals: count,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Get meal by id
// @route GET /api/meals/:id
// @access Public
const getMealById = asyncHandler(async (req, res) => {
  try {
    // Find meal by id in DB
    const meal = await Meal.findById(req.params.id);

    // If meal is founded send it to the client
    if (meal) {
      res.json(meal);
    }
    // If meal is not founded send 404 error
    else {
      res.status(404);
      throw new Error("Meal not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Get top rated meals
// @route GET /api/meals/rated/top
// @access Public
const getTopRatedMeals = asyncHandler(async (req, res) => {
  try {
    // Find top rated meals
    const meals = await Meal.find({}).sort({ rate: -1 });
    // Send top rated meals to the client
    res.json(meals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*----- Private Controllers -----*/

// @desc Create meal review
// @route POST /api/meals/:id/reviews
// @access Private
const createMealReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  try {
    // Find meal in DB
    const meal = await Meal.findById(req.params.id);

    if (meal) {
      // Check if user already reviewed this meal
      const alreadyReviewed = meal.reviews.find(
        (r) => r.userId.toString() === req.user._id.toString()
      );
      // If the user already reviewed this meal send a 400 error message
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("You already reviewed this meal");
      }

      // Else create a new review
      const review = {
        userName: req.user.userName,
        userId: req.user._id,
        userImage: req.user.image,
        rating: Number(rating),
        comment,
      };
      // Push the new review to the reviews array
      meal.reviews.push(review);
      // Increment the number of reviews
      meal.numberOfReviews = meal.reviews.length;
      // Calculate the new rate
      meal.rate =
        meal.reviews.reduce((acc, item) => item.rating + acc, 0) /
        meal.reviews.length;
      // Save the meal in DB
      await meal.save();
      // Send the new meal to the client
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("Meal not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*----- Admin Controllers -----*/

// @desc Update meal
// @route PUT /api/meals/:id
// @access Private/Admin
const updateMeal = asyncHandler(async (req, res) => {
  try {
    // Get data from req.body
    const { name, desc, image, category, numberOfReviews, rate, chefs, price } =
      req.body;

    // Find meal by id in DB
    const meal = await Meal.findById(req.params.id);

    if (meal) {
      // Update meal data
      meal.name = name || meal.name;
      meal.desc = desc || meal.desc;
      meal.image = image || meal.image;
      meal.category = category || meal.category;
      meal.numberOfReviews = numberOfReviews || meal.numberOfReviews;
      meal.rate = rate || meal.rate;
      meal.price = price || meal.price;
      meal.chefs = chefs || meal.chefs;

      // Save the meal in DB
      const updatedMeal = await meal.save();
      // Save updated meal to the client
      res.status(201).json(updatedMeal);
    } else {
      res.status(404);
      throw new Error("Meal not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete meal
// @route DELETE /api/meals/:id
// @access Private/Admin
const deleteMeal = asyncHandler(async (req, res) => {
  try {
    // Find meal by id in the DB
    const meal = await Meal.findById(req.params.id);
    // If meal is founded delete it
    if (meal) {
      await meal.deleteOne();
      res.json({ message: "Meal deleted successfully" });
    }
    // If the meal is not founded send 404 error
    else {
      res.status(404);
      throw new Error("Meal not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete all meals
// @route DELETE /api/meals
// @access Private/Admin
const deleteAllMeals = asyncHandler(async (req, res) => {
  try {
    // Delete all meals
    await Meal.deleteMany({});
    res.json({ message: "All meals removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Create meal
// @route POST /api/meals
// @access Private/Admin
const createMeal = asyncHandler(async (req, res) => {
  try {
    // Get data from req.body
    const { name, desc, image, category, numberOfReviews, rate, chefs, price } =
      req.body;
    // Create a new meal
    const meal = new Meal({
      name,
      desc,
      image,
      category,
      numberOfReviews,
      rate,
      chefs,
      price,
      userId: req.user._id,
    });

    // Save the meal in DB
    if (meal) {
      const createdMeal = await meal.save();
      res.status(201).json(createdMeal);
    } else {
      res.status(400);
      throw new Error("Invalid meal data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  getMeals,
  getMealById,
  getTopRatedMeals,
  createMealReview,
  updateMeal,
  deleteMeal,
  deleteAllMeals,
  createMeal,
};
