const { StatusCodes } = require("http-status-codes");
const UserModel = require("../models/UserModel");

const addProductToCart = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.userData.userId });
  user.cart = [...user.cart, req.body];
  await user.save();
  res.status(StatusCodes.OK).json(user.cart);
};

const deleteProductFromCart = async (req, res) => {
  const productId = req.params.id;
  const user = await UserModel.findOne({ _id: req.userData.userId });
  const existingCart = user.cart;
  const newCart = existingCart.filter(
    (item) => item._id.toString() !== productId
  );
  user.cart = newCart;
  await user.save();
  res.status(StatusCodes.OK).json(user.cart);
};

const getCartProducts = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.userData.userId });
  res.status(StatusCodes.OK).json(user.cart);
};

const deleteAllCartProducts = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.userData.userId });
  user.cart = [];
  await user.save();
  res.status(StatusCodes.OK).json(user.cart);
};

module.exports = {
  addProductToCart,
  deleteAllCartProducts,
  deleteProductFromCart,
  getCartProducts,
};
