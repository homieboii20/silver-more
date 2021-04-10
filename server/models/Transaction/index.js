import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    name: String,
    amount: Number,
    date: Date,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    budget: { type: mongoose.Schema.Types.ObjectId, ref: "Budget" },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
