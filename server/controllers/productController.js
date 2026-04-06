import Product from "../models/product.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      posPrice,
      inStock,
      barcode,
      categoryId,
      categoryName,
      categoryIndex,
      taxPercentage,
      isLive,
    } = req.body;

    // ── Validation ───────────────────────────────────────────────────────
    if (
      !name ||
      !description ||
      !price ||
      !inStock ||
      !categoryId ||
      !categoryName
    ) {
      return res.status(400).json({
        error: true,
        success: false,
        message:
          "Missing required fields: name, description, price, inStock, categoryId, categoryName",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Product image is required",
      });
    }

    // ── Build category / subCategory shape (mirrors your API response) ───
    const categoryShape = {
      id: categoryId,
      categoryName,
      categoryIndex: Number(categoryIndex) || 0,
    };

    // ── Cloudinary gives us the public_id; store it as "/uploads/products/<id>"
    //    to match your existing path format.
    const imagePublicId = req.file.filename || req.file.public_id;

    // ── Create & save ────────────────────────────────────────────────────
    const product = new Product({
      name,
      description,
      price: Number(price),
      posPrice: posPrice ? Number(posPrice) : Number(price),
      inStock: Number(inStock),
      barcode: barcode || undefined,
      category: categoryShape,
      subCategory: { id: categoryId, categoryName },
      taxPercentage: taxPercentage || "0",
      isLive:
        isLive !== undefined ? isLive === "true" || isLive === true : true,

      // Cloudinary URL kept separately for convenience
      image: req.file.path,
    });

    await product.save();

    return res.status(201).json({
      error: false,
      success: true,
      data: product,
    });
  } catch (err) {
    console.error("Create product error:", err);
    return res.status(500).json({
      error: true,
      success: false,
      message: err.message || "Internal server error",
    });
  }
};

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      error: false,
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      error: false,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
