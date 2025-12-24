import HttpException from "../utils/HttpException.js";

export const adminMiddleware = (req, res, next) => {
    const user = req.user;
    if (!user?.isAdmin) {
        return next(HttpException(403, "Forbidden: Admins only"));
    }
    next();
}
