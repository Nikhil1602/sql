const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Buses = sequelize.define("Buses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    busNumber: {
        type: DataTypes.STRING,
    },
    totalSeats: {
        type: DataTypes.INTEGER,
    },
    availableSeats: {
        type: DataTypes.INTEGER,
    }
});

module.exports = Buses;