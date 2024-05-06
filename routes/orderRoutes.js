const express = require("express");
const {
  createOrder,
  getUserCurrentOrder,
  getUserOrderHistory,
  getAllCurrentActiveOrders,
  updateOrderStatus,
  getAllTodayOrders,
  getSingleOrder,
} = require("../controllers/order-controllers");
const { checkAuth, authorizePermission } = require("../middleware/auth");
const router = express.Router();

router.post("/", checkAuth, createOrder);

router.get("/current", checkAuth, getUserCurrentOrder);

router.get("/history", checkAuth, getUserOrderHistory);

router.get(
  "/admin/detail/:id",
  checkAuth,
  authorizePermission("admin"),
  getSingleOrder
);

router.get(
  "/admin/activeOrders",
  checkAuth,
  authorizePermission("admin"),
  getAllCurrentActiveOrders
);

router.patch(
  "/admin/updateOrder/:id",
  checkAuth,
  authorizePermission("admin"),
  updateOrderStatus
);

router.get(
  "/admin/todayOrders",
  checkAuth,
  authorizePermission("admin"),
  getAllTodayOrders
);

module.exports = router;
