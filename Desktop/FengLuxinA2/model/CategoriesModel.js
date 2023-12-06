const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesType = {
    name: string
};

const ProductModel = mongoose.model("Categories", new Schema(CategoriesType));

module.exports = ProductModel;