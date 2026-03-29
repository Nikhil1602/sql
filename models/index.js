const Student = require("./students");
const Department = require("./departments");
const Courses = require("./courses");
const StudentCourses = require("./student-course");

Department.hasMany(Student);
Student.belongsTo(Department);

Student.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Student, { through: StudentCourses });

module.exports = {
    Student, Department
}