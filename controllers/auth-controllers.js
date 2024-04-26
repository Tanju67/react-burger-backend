const { StatusCodes } = require("http-status-codes");
const { BadRequest, UnauthenticatedError } = require("../errors");
const UserModel = require("../models/UserModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const isFirstAccount = (await UserModel.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await UserModel.create({ name, email, password, role });

  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ id: user._id, name, email, role, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ id: user._id, email, name: user.name, role: user.role, token });
};

const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.userData.userId });

  const { password, ...info } = user._doc;

  res.status(StatusCodes.OK).json({ info });
};

module.exports = { register, login, getCurrentUser };
