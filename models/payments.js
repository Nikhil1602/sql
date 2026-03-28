const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Payments = sequelize.define("Payments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amountPaid: {
        type: DataTypes.BOOLEAN,
    },
    paymentStatus: {
        type: DataTypes.STRING,
    }
});

module.exports = Payments;