import HttpException from "../utils/HttpException.js";

export const adminMiddleware = (req, res, next) => {
    const user = req.user;
    if (!user?.isAdmin) {
        return next(HttpException(403, "Forbidden: Admins only"));
    }
    next();
}

// Middleware to check whether the user is an admin
// Middleware zur Überprüfung, ob der Benutzer ein Administrator ist