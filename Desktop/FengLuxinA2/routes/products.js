const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 响应前端的 POST 请求 - 增加产品
router.post("/products", ProductController.addProduct);

// 动态路由，根据 ID 更新产品
router.put("/products/:myid", ProductController.updateProduct);

// 删除产品
router.delete("/products/:id", ProductController.deleteProduct);

// 获取产品列表
router.get("/products", ProductController.getProduct);

// 删除所有产品
router.delete("/products", ProductController.deleteAllProduct);

// 根据 ID 查询产品
router.get("/products/:id", ProductController.getIdProduct);

//根据关键词查找
router.get("/products/productname/:substring", ProductController.getProductByName);
module.exports = router;
