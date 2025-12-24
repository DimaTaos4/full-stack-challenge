import * as analysisService from "../services/analysis.service.js";

export const getAnalysisController = async (req, res, next) => {
    try {
        const user = req.user;
        const retailerKeyFromQuery = req.query.retailerKey;
        const data = await analysisService.getAnalysis(user, retailerKeyFromQuery);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}