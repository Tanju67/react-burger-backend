const { StatusCodes } = require("http-status-codes");
const MenuModel = require("../models/MenuModel");
const ProductModel = require("../models/ProductModel");
const { BadRequest, NotFoundError } = require("../errors");

const getAllMenus = async (req, res) => {
  const menus = await MenuModel.find({});
  res.status(StatusCodes.OK).json(menus);
};

const getExtraMenus = async (req, res) => {
  const title = req.query.title;
  const menus = await MenuModel.find({ title });
  console.log(menus);
  const products = await ProductModel.find({ menu: menus[0]._id });
  res.status(StatusCodes.OK).json(products);
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
  console.log(title);

  const menu = await MenuModel.create({ title, image: req.image.secure_url }); //req.image.secure_url
  res.status(StatusCodes.CREATED).json(menu);
};

const updateMenu = async (req, res) => {
  const { title } = req.body;
  const menuId = req.params.id;

  const menu = await MenuModel.findOneAndUpdate(
    { _id: menuId },
    { title, image: req.image.secure_url },
    {
      new: true,
      runValidators: true,
    }
  );

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

  const products = await ProductModel.deleteMany({ menu: menuId });
  res.status(StatusCodes.OK).json(menu);
};

module.exports = {
  getAllMenus,
  getSingleMenu,
  getExtraMenus,
  createMenu,
  deleteMenu,
  updateMenu,
};
