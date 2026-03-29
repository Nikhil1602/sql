const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Department = sequelize.define("Department", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    }
});

module.exports = Department;