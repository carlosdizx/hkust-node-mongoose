import { Schema, Document, model } from "mongoose";

interface IDish extends Document {
  name: string;
  description: string;
  comments: { rating: number; comment: string; author: string }[];
}

const commentSchema = new Schema(
  {
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const DishModel = model<IDish>("Dish", dishSchema);

export default DishModel;
