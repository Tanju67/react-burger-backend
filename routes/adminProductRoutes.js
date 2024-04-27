const express = require("express");
const {
  getAllMenuProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/admin-product-controllers");
const { checkAuth, authorizePermission } = require("../middleware/auth");
const router = express.Router();

router.get("/menu/:menuId", getAllMenuProduct);

router.get("/:id", getSingleProduct);

router.use(checkAuth, authorizePermission("admin"));

router.post("/:menuId", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
