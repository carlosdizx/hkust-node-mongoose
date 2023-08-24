import mongoose, { Schema, Document, model } from "mongoose";

interface IDish extends Document {
  name: string;
  description: string;
}

const schema = new Schema(
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
  },
  { timestamps: true }
);

const dishModel = model<IDish>("Dish", schema);

export default dishModel;
