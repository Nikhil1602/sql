const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const studentCourse = sequelize.define("studentCourses", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }
});

module.exports = studentCourse;