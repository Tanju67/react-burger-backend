require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UnauthenticatedError, UnauthorizedError } = require("../errors");

const checkAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError(
      "Please provide a valid username and password"
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userData = {
      userId: decoded.userId,
      userName: decoded.name,
      userRole: decoded.role,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError(
      "Please provide a valid username and password"
    );
  }
};

const authorizePermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userData.userRole)) {
      throw new UnauthorizedError("Unauthorized to acces this route");
    }
    next();
  };
};

module.exports = { checkAuth, authorizePermission };
