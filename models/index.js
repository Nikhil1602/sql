const Student = require("./students");
const Department = require("./departments");

Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
    Student, Department
}