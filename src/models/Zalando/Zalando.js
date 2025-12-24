import { DataTypes } from "sequelize";
import sequelize from "../../db/sequelize.js";

const Zalando = sequelize.define("Zalando", {
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
    tableName: "zalando",
    timestamps: false,
});

export default Zalando;