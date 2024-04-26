const CustomAPIError = require("./customError");
const BadRequest = require("./badRequest");
const UnauthenticatedError = require("./unauthenticated");
const UnauthorizedError = require("./unauthorized");

module.exports = {
  CustomAPIError,
  BadRequest,
  UnauthenticatedError,
  UnauthorizedError,
};
