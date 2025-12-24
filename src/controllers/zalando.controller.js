import * as zalandoService from "../services/zalando.service.js";

export const addZalandoDataController = async (req, res, next) => {
    try {
        const { month, revenue } = req.body;
        const data = await zalandoService.addDataZalandoService({ month, revenue });
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}