const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Bookings = sequelize.define("Bookings", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    seatNumber: {
        type: DataTypes.INTEGER,
    }
});

module.exports = Bookings;