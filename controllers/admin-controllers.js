const { StatusCodes } = require("http-status-codes");
const MenuModel = require("../models/MenuModel");
const { BadRequest, NotFoundError } = require("../errors");

const getAllMenus = async (req, res) => {
  const menus = await MenuModel.find({});
  res.status(StatusCodes.OK).json(menus);
};

const getSingleMenu = async (req, res) => {
  const menuId = req.params.id;

  const menu = await MenuModel.findOne({ _id: menuId });
  if (!menu) {
    throw new NotFoundError(`No menu found for id:${menuId}`);
  }

  res.status(StatusCodes.OK).json(menu);
};

const createMenu = async (req, res) => {
  const { title } = req.body;

  const menu = await MenuModel.create({ title, image: "asas" }); //req.image.secure_url
  res.status(StatusCodes.CREATED).json(menu);
};

const updateMenu = async (req, res) => {
  const menuId = req.params.id;

  const menu = await MenuModel.findOneAndUpdate({ _id: menuId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!menu) {
    throw new NotFoundError(`No menu found for id:${menuId}`);
  }
  res.status(StatusCodes.OK).json(menu);
};

const deleteMenu = async (req, res) => {
  const menuId = req.params.id;

  const menu = await MenuModel.findOneAndDelete({ _id: menuId });

  if (!menu) {
    throw new NotFoundError(`No menu found for id:${menuId}`);
  }
  res.status(StatusCodes.OK).json(menu);
};

module.exports = {
  getAllMenus,
  getSingleMenu,
  createMenu,
  deleteMenu,
  updateMenu,
};
