import * as analysisService from "../services/analysis.service.js";

export const getAnalysisController = async (req, res, next) => {
    try {
        const user = req.user;
        const data = await analysisService.getAnalysis(user);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}