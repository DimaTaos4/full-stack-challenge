import User from "../models/User/User.js";

import HttpException from "../utils/HttpException.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const createUserService = async ({ username, email, password }) => {
    if (!username || !email || !password) {
        throw HttpException(400, "Missing required fields: username, email, password");
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
        throw HttpException(409, `User with email '${email}' already exists`);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });
    return {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    };
}

export const loginUserService = async ({ email, password }) => {
    if (!email || !password) {
        throw HttpException(400, "Missing required fields: email, password");
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw HttpException(401, "Invalid email");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw HttpException(401, "Invalid password");
    }
    const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin, retailerKey: user.retailerKey }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        retailerKey: user.retailerKey,
        token
    };
}
