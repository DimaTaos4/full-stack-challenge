import * as zalandoService from "../services/zalando.service.js";

export const addDataZalandoController = async (req, res, next) => {
    try {
        const { month, revenue } = req.body;
        const data = await zalandoService.addDataZalandoService({ month, revenue });
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}