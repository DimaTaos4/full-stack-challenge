import * as breuningerService from "../services/breuninger.service.js";

export const addBreuningerDataController = async (req, res, next) => {
    try {
        const { month, revenue } = req.body;
        const data = await breuningerService.addBreuningerDataService({ month, revenue });
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}