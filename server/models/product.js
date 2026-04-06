import mongoose from "mongoose";
import { nanoid } from "nanoid";

const categoryEmbedSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    categoryName: { type: String, required: true },
    categoryIndex: { type: Number, default: 0 },
  },
  { _id: false }
);

const subCategoryEmbedSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    categoryName: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    // Custom short ID (matches "id" field in your response)
    id: {
      type: String,
      unique: true,
      default: () => nanoid(17), // same length as your existing IDs
    },
    barcode: { type: String, default: undefined },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },

    price: { type: Number, required: true },
    posPrice: { type: Number },

    // Cloudinary path e.g. "/uploads/products/<public_id>"
    image: { type: String, required: true },
    // Full Cloudinary URL (convenient for client-side use)
    imageUrl: { type: String },

    inStock: { type: Number, default: 0 },
    ordersCount: { type: Number, default: 0 },

    isLive: { type: Boolean, default: true },
    taxPercentage: { type: String, default: "0" },

    category: { type: categoryEmbedSchema, required: true },
    subCategory: { type: subCategoryEmbedSchema, required: true },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
    toJSON: { virtuals: true },
  }
);

export default mongoose.model("Product", productSchema);
