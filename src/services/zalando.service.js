import Zalando from "../models/Zalando/Zalando.js";
import HttpException from "../utils/HttpException.js";

export const addDataZalandoService = async ({ month, revenue }) => {
    const existingEntry = await Zalando.findOne({ where: { month } });
    if (existingEntry) {
        throw HttpException(409, `Data for month ${month} already exists`);
    }
    const newEntry = await Zalando.create({ month, revenue });
    return {
        id: newEntry.id,
        month: newEntry.month,
        revenue: newEntry.revenue
    };
}