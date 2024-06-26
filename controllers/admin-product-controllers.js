const { StatusCodes } = require("http-status-codes");
const ProductModel = require("../models/ProductModel");
const { NotFoundError } = require("../errors");

const getAllMenuProduct = async (req, res) => {
  const { menuId } = req.params;
  const products = await ProductModel.find({ menu: menuId }).populate("menu");

  res.status(StatusCodes.OK).json(products);
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await ProductModel.find({ _id: productId }).populate("menu");

  res.status(StatusCodes.OK).json(product);
};

const createProduct = async (req, res) => {
  const { title, description, price, menu } = req.body;
  const { menuId } = req.params;
  const product = await ProductModel.create({
    title,
    description,
    price,
    menu: menuId,
  });
  res.status(StatusCodes.CREATED).json(product);
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json(product);
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await ProductModel.findByIdAndDelete({ _id: productId });

  res.status(StatusCodes.OK).json(product);
};

module.exports = {
  getAllMenuProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
