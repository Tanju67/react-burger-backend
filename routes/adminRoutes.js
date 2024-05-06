const express = require("express");
const {
  getAllMenus,
  getSingleMenu,
  getExtraMenus,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/admin-controllers");
const { checkAuth, authorizePermission } = require("../middleware/auth");
const fileUpload = require("../middleware/file-upload");
const fileStream = require("../middleware/file-stream");
const router = express.Router();

router.get("/", getAllMenus);

router.get("/extra", getExtraMenus);

router.get("/:id", getSingleMenu);

router.use(checkAuth, authorizePermission("admin"));

router.post("/", fileUpload.single("image"), fileStream, createMenu);

router.patch("/:id", fileUpload.single("image"), fileStream, updateMenu);

router.delete("/:id", deleteMenu);

module.exports = router;
