const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title:{type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)