import Zalando from "../models/Zalando/Zalando.js"
import Breuninger from "../models/Breuninger/Breuninger.js"
import HttpException from "../utils/HttpException.js"

export const getAnalysis = async (user, retailerKeyFromQuery) => {
    let retailerKey;

    if (user.isAdmin) {
        if (!retailerKeyFromQuery) {
            throw HttpException(400, "Admin must select one retailer");
        }
        retailerKey = retailerKeyFromQuery;
    } else {
        retailerKey = user.retailerKey;
    }

    const modelMap = {
        zalando: Zalando,
        breuninger: Breuninger,
    };

    const Model = modelMap[retailerKey];

    if (!Model) {
        throw HttpException(400, "Invalid retailer");
    }

    return await Model.findAll();
};