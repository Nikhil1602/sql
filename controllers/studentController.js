const Students = require("../models/students");

const createStudent = async (req, res) => {

    try {

        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const departmentId = req.body.departmentId;

        const student = await Students.create({
            name: name,
            email: email,
            age: age,
            departmentId: departmentId
        });

        return res.status(201).send(student);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const updateStudent = async (req, res) => {

    try {

        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;

        if (!name || !email) {
            return res.status(400).send("Name and email are required");
        }

        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found!");
        }

        student.name = name;
        student.email = email;

        await student.save();

        return res.status(201).send(student);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }


}

const deleteStudent = async (req, res) => {

    try {

        const id = req.params.id;

        if (!id) {
            return res.status(400).send("id is required");
        }

        const student = await Students.destroy({ where: { id: id } });

        if (!student) {
            return res.status(404).send("Student not found!");
        }

        return res.status(201).send(student);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const getAllStudents = async (req, res) => {

    try {

        const students = await Students.findAll();

        if (!students) {
            return res.status(404).send("Students not found!");
        }

        return res.status(200).send(students);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const getStudent = async (req, res) => {

    try {

        const id = req.params.query;

        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found!");
        }

        return res.status(200).send(student);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = {
    createStudent, updateStudent, deleteStudent, getAllStudents, getStudent
}