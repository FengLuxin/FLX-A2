
// const { getProduct } = require("../controllers/ProductController");
// const ProductModel = require("../model/ProductModel");

// const ProductService = {
//     addProduct: (productname, description, price, quantity, category) => {
//         return ProductModel.create({
//             productname,
//             description,
//             price,
//             quantity,
//             category
//         });
//     },

//     updateProduct: (_id, productname, description, price, quantity, category) => {
//         return ProductModel.updateOne({ _id }, {
//             productname,
//             description,
//             price,
//             quantity,
//             category
//         });
//     },

//     deleteProduct: (_id) => {
//         return ProductModel.deleteOne({ _id });
//     },

//     getProduct: async (page, limit) => {
//         const data = await ProductModel.find({}, ["productname", "description", "price", "quantity", "category"])
//             .sort({ age: -1 })
//             .skip((page - 1) * limit)
//             .limit(limit);
//         return data;
//     }
// };

// module.exports = ProductService;

// const ProductModel = require("../model/ProductModel");

// const ProductService = {
//     addProduct: (productname, description, price, quantity, category) => {
//         return ProductModel.create({
//             productname,
//             description,
//             price,
//             quantity,
//             category
//         });
//     },

//     updateProduct: (_id, productname, description, price, quantity, category) => {
//         return ProductModel.updateOne({ _id }, {
//             productname,
//             description,
//             price,
//             quantity,
//             category
//         });
//     },

//     deleteProduct: (_id) => {
//         return ProductModel.deleteOne({ _id });
//     },

//     getProduct: async (page, limit) => {
//         const data = await ProductModel.find({}, ["productname", "description", "price", "quantity", "category"])
//             .sort({ age: -1 })
//             .skip((page - 1) * limit)
//             .limit(limit);
//         return data;
//     }
// };

// module.exports = ProductService;
const ProductModel = require("../model/ProductModel");

const ProductService = {
  addProduct: async (productname, description, price, quantity, category) => {
    try {
      const newProduct = await ProductModel.create({
        productname,
        description,
        price,
        quantity,
        category
      });
      return newProduct;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  updateProduct: async (_id, productname, description, price, quantity, category) => {
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        _id,
        {
          productname,
          description,
          price,
          quantity,
          category
        },
        { new: true }
      );
      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  deleteProduct: async (_id) => {
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(_id);
      return deletedProduct;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
  
  deleteAllProduct: async () => {
    try {
      const deletedProducts = await ProductModel.deleteMany({});
      return deletedProducts;
    } catch (error) {
      console.error("Error deleting all products:", error);
      throw error;
    }
  },
  getIdProduct: async (id) => {
    try {
      const product = await ProductModel.findById(id);
      return product;
    } catch (error) {
      console.error("Error getting product by ID:", error);
      throw error;
    }
  },
  getProductByName: (substring) => {
  const search = new RegExp(substring, 'i');
  return ProductModel.find({ productname: { $regex: search } });
   },
  getProduct: async (page, limit) => {
    try {
      const data = await ProductModel.find({}, ["productname", "description", "price", "quantity", "category"])
        .sort({ _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
      return data;
    } catch (error) {
      console.error("Error getting product list:", error);
      throw error;
    }
  }
};

module.exports = ProductService;