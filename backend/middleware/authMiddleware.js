import jwt from "jsonwebtoken";
import User from "../models/User.js";

// PROTECT ROUTES (Only Logged In User):-
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check token in header:-
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // If no token:-
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token:-
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token:-
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed",error });
  }
};

// ADMIN ONLY:-
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Admin access denied" });
  }
};

