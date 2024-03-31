import Categories from "../Models/CategoriesModal.js";
import asyncHandler from "express-async-handler";

/*----- Public Controllers -----*/

// @desc Get all categories
// @route GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
  try {
    // Find all categories in DB
    const categories = await Categories.find({});
    // Send all categories to the client
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*----- Admin controllers -----*/

// @desc Create category
// @route POST /api/categories
// @access Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  try {
    // Get title from req.body
    const { title } = req.body;
    // Create new category
    const category = new Categories({
      title,
    });
    // Save category in DB
    const createdCategorie = await category.save();
    // Save the new category to the client
    res.status(201).json(createdCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Update category
// @route PUT /api/categories/:id
// @access Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  try {
    // Get category id from request params
    const category = await Categories.findById(req.params.id);
    if (category) {
      // Update category title
      category.title = req.body.title || category.title;
      // Save updated category in DB
      const updatedCategory = await category.save();
      // Send updated category to the client
      res.json(updatedCategory);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete category
// @route DELETE /api/categories/:id
// @access Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    // Get category id from request params
    const category = await Categories.findById(req.params.id);

    if (category) {
      // Delete category from DB
      await category.deleteOne();
      // Send success message to the client
      res.json({ message: "Category removed" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { getCategories, createCategory, updateCategory, deleteCategory };
