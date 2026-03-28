const db = require("../utils/db");

const createUser = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    const query = `
        INSERT INTO Users (name, email)
        VALUES (?, ?)
    `;

    db.query(query, [name, email], (error) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        return res.status(201).send("User created successfully!");

    })

}

const updateUser = (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }

    const query = `
        UPDATE Users
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
            return res.status(404).send("User not found");
        }

        return res.status(200).send("User updated successfully!");

    })

}

const deleteUser = (req, res) => {

    const id = req.params.id;

    const query = `
        DELETE FROM Users
        WHERE id="${id}"
    `;

    db.query(query, (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send("User deleted successfully!");

    });

}

module.exports = {
    createUser, updateUser, deleteUser
}