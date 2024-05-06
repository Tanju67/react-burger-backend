const { StatusCodes } = require("http-status-codes");
const OrderModel = require("../models/OrderModel");
const UserModel = require("../models/UserModel");
const { NotFoundError } = require("../errors");

//user
const createOrder = async (req, res) => {
  const userId = req.userData.userId;
  const { name, phone, street, houseNumber, orderItems } = req.body;

  const newOrder = {
    name,
    phone,
    street,
    houseNumber,
    orderItems,
    createdBy: userId,
  };

  const order = await OrderModel.create(newOrder);

  const user = await UserModel.findOne({ _id: userId });

  user.cart = [];

  await user.save();

  res.status(StatusCodes.CREATED).json(order);
};

const getUserOrderHistory = async (req, res) => {
  const userId = req.userData.userId;

  const orders = await OrderModel.find({
    createdBy: userId,
    status: "delivered",
  }).sort({ createdAt: -1 });

  res.status(StatusCodes.OK).json(orders);
};

const getUserCurrentOrder = async (req, res) => {
  const userId = req.userData.userId;

  const orders = await OrderModel.find({
    createdBy: userId,
  }).sort({ createdAt: -1 });

  const filteredOrder = orders.filter((item) => item.status !== "delivered");

  res.status(StatusCodes.OK).json(filteredOrder);
};

//admin
const getAllCurrentActiveOrders = async (req, res) => {
  const orders = await OrderModel.find({}).sort({ createdAt: -1 });

  const filteredOrder = orders.filter((item) => item.status !== "delivered");

  res.status(StatusCodes.OK).json(filteredOrder);
};

const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const order = await OrderModel.findOneAndUpdate({ _id: orderId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json(order);
};

const getAllTodayOrders = async (req, res) => {
  const orders = await OrderModel.find({}).sort({ createdAt: -1 });
  const filteredOrder = orders.filter((item) => {
    let itemDate = new Date(item.createdAt).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const today = new Date(Date.now()).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return itemDate === today;
  });

  res.status(StatusCodes.OK).json(filteredOrder);
};

const getSingleOrder = async (req, res) => {
  const orderId = req.params.id;
  console.log(orderId);
  const order = await OrderModel.findOne({ _id: orderId });

  res.status(StatusCodes.OK).json(order);
};

module.exports = {
  createOrder,
  getUserCurrentOrder,
  getUserOrderHistory,
  getAllCurrentActiveOrders,
  updateOrderStatus,
  getAllTodayOrders,
  getSingleOrder,
};
