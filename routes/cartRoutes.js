const express = require("express");
const router = express.Router();
const {
  getCartProducts,
  deleteAllCartProducts,
  deleteProductFromCart,
  addProductToCart,
} = require("../controllers/cart-controllers");
const { checkAuth } = require("../middleware/auth");

router.use(checkAuth);

router.get("/", getCartProducts);

router.post("/", addProductToCart);

router.delete("/deleteAll", deleteAllCartProducts);

router.delete("/:id", deleteProductFromCart);

module.exports = router;
