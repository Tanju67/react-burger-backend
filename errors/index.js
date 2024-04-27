const CustomAPIError = require("./customError");
const BadRequest = require("./badRequest");
const UnauthenticatedError = require("./unauthenticated");
const UnauthorizedError = require("./unauthorized");
const NotFoundError = require("./not-found");

module.exports = {
  CustomAPIError,
  BadRequest,
  UnauthenticatedError,
  UnauthorizedError,
  NotFoundError,
};
