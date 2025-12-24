import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const Breuninger = sequelize.define("Breuninger", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    revenue: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: "breuninger",
    timestamps: false,
});

export default Breuninger;