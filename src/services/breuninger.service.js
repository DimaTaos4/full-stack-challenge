import Breuninger from "../models/Breuninger/Breuninger.js";

import HttpException from "../utils/HttpException.js";

export const addBreuningerDataService = async ({ month, revenue }) => {
    if (!month || !revenue) {
        throw HttpException(400, "Month and revenue are required.");
    }
    const existingEntry = await Breuninger.findOne({ where: { month } });
    if (existingEntry) {
        throw HttpException(409, `Data for month ${month} already exists.`);
    }
    const newEntry = await Breuninger.create({ month, revenue });
    return newEntry;
}
