import * as retailersService from "../services/retailers.service.js";

export const getRetailersController = async (req, res, next) => {
    try {
        const retailers = await retailersService.getRetailers()
        res.status(200).json(retailers);
    } catch (error) {
        next(error);
    }
}

