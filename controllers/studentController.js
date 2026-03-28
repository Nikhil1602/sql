const db = require("../utils/db");

const createStudent = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;

    const query = `
        INSERT INTO Students (name, email, age)
        VALUES (?, ?, ?)
    `;

    db.query(query, [name, email, age], (error) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        return res.status(201).send("Student created successfully!");

    })

}

const updateStudent = (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }

    const query = `
        UPDATE Students
        SET name = ?, email = ?
        WHERE id = ?
    `;

    db.query(query, [name, email, id], (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        return res.status(200).send("Student updated successfully!");

    })

}

const deleteStudent = (req, res) => {

    const id = req.params.id;

    const query = `
        DELETE FROM Students
        WHERE id="${id}"
    `;

    db.query(query, (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        return res.status(200).send("Student deleted successfully!");

    });

}

const getAllStudents = (req, res) => {

    const query = `
        SELECT * FROM Students
    `;

    db.query(query, (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Students not found");
        }

        return res.status(200).send(result);

    });

}

const getStudent = (req, res) => {

    const id = req.params.query;

    const query = `
        SELECT * FROM Students
        WHERE id = ?
    `;

    db.query(query, [id], (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        return res.status(200).send(result);

    });

}

module.exports = {
    createStudent, updateStudent, deleteStudent, getAllStudents, getStudent
}