const ProductService = require("../services/ProductService");

const ProductController = {
  addProduct: async (req, res) => {
    try {
      const { productname, description, price, quantity, category } = req.body;
      await ProductService.addProduct(productname, description, price, quantity, category);
      res.send({ ok: 1 });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).send({ error: "Failed to add product" });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { productname, description, price, quantity, category } = req.body;
      await ProductService.updateProduct(req.params.myid, productname, description, price, quantity, category);
      res.send({ ok: 1 });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).send({ error: "Failed to update product" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.send({ ok: 1 });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).send({ error: "Failed to delete product" });
    }
  },

  deleteAllProduct: async (req, res) => {
    try {
      await ProductService.deleteAllProduct(); // Assuming ProductService has a method named deleteAllProduct
      res.send({ ok: 1 });
    } catch (error) {
      console.error("Error deleting all products:", error);
      res.status(500).send({ error: "Failed to delete all products" });
    }
  },
  getIdProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductService.getIdProduct(id);
      res.send(product);
    } catch (error) {
      console.error("Error getting product by ID:", error);
      res.status(500).send({ error: "Failed to get product by ID" });
    }
  },
  getProductByName: async (req, res) => {
try {
const substring = req.params.substring;
const data = await ProductService.getProductByName(substring);
res.send(data);
} catch (error) {
res.status(500).send({ message: error.message });
 }
},
  getProduct: async (req, res) => {
    try {
      const { page, limit } = req.query;
      const data = await ProductService.getProduct(page, limit);
      res.send(data);
    } catch (error) {
      console.error("Error getting product list:", error);
      res.status(500).send({ error: "Failed to get product list" });
    }
  }
};

module.exports = ProductController;