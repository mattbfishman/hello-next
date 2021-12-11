import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  imgSrc: String,
  description: String,
  id: String
},
{ timestamps: true });

const Item = mongoose.model("Item", itemSchema);

export default Item;