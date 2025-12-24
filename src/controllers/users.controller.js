import * as userService from "../services/users.service.js";

export const registerUserController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const data = await userService.createUserService({ username, email, password });
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}
export const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await userService.loginUserService({ email, password });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}