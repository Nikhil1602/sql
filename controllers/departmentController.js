const Students = require("../models/students");
const Departments = require("../models/departments");

const assignDepartment = async (req, res) => {

    try {

        const { student_id, name } = req.body;

        const student = await Students.findByPk(student_id);
        const department = await Departments.create({
            name: name,
            studentId: student.id
        });

        if (!student) {
            return res.status(404).send("Student not found!");
        }

        return res.status(200).send(department);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = { assignDepartment };