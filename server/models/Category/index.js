import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    category_type: {
      type: String,
      enum: ["income", "expense"],
    },
    icon: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
