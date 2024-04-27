const express = require("express");
const {
  getAllMenus,
  getSingleMenu,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/admin-controllers");
const { checkAuth, authorizePermission } = require("../middleware/auth");
const fileUpload = require("../middleware/file-upload");
const fileStream = require("../middleware/file-stream");
const router = express.Router();

router.get("/", getAllMenus);

router.get("/:id", getSingleMenu);

router.use(checkAuth, authorizePermission("admin"));

router.post("/", createMenu); //fileUpload.single("image"),fileStream

router.patch("/:id", updateMenu);

router.delete("/:id", deleteMenu);

module.exports = router;
