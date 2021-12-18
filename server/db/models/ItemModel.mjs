import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  imgSrc: String,
  description: String,
  _id: String,
  date: Date
},
{ timestamps: true });

const Item = mongoose.model("Item", itemSchema);

export default Item;