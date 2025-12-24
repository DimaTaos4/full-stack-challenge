import sequelize from "./sequelize.js";

import "../models/User/User.js";
import "../models/Zalando/Zalando.js";
import "../models/Breuninger/Breuninger.js";


const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        await sequelize.sync({ alter: true });
        console.log("All models synced");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1);
    }
};

export default connectDatabase;