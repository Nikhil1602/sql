const Student = require("./students");
const Department = require("./departments");
const Courses = require("./courses");
const StudentCourses = require("./student-course");
const User = require("./users");
const Bus = require("./buses");
const Booking = require("./bookings");

Department.hasMany(Student);
Student.belongsTo(Department);

Student.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Student, { through: StudentCourses });

User.hasMany(Booking, { foreignKey: "userId", as: "bookings" });
Booking.belongsTo(User, { foreignKey: "userId", as: "user" });

Bus.hasMany(Booking, { foreignKey: "busId", as: "bookings" });
Booking.belongsTo(Bus, { foreignKey: "busId", as: "bus" });

module.exports = {
    Student, Department, Bus, Booking, User, Courses, StudentCourses
}