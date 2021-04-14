import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    pcs: { type: Number, required: true},
    totalWeight: { type: Number, required: true},
    averageWeight: { type: Number, required: true},
    pricePerGram: { type: Number, required: true},
    pricePerPc: { type: Number, required: true}
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
