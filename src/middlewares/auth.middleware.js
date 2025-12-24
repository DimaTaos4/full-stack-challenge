import jwt from "jsonwebtoken";
import HttpException from "../utils/HttpException.js";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return next(HttpException(401, "Unauthorized"));
    }

    try {
        req.user = jwt.verify(
            authHeader.split(" ")[1],
            process.env.JWT_SECRET
        );
        next();
    } catch {
        next(HttpException(401, "Invalid token"));
    }
};

// Token presence validation
// Überprüfung auf vorhandenes Token