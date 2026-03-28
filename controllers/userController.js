const Users = require("../models/users");

const createUser = async (req, res) => {

    try {

        const name = req.body.name;
        const email = req.body.email;

        const user = await Users.create({
            name: name,
            email: email,
        });

        return res.status(201).send(user);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const updateUser = async (req, res) => {

    try {

        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;

        if (!name || !email) {
            return res.status(400).send("Name and email are required");
        }

        const user = await Users.findByPk(id);

        if (!user) {
            return res.status(404).send("User not found!");
        }

        user.name = name;
        user.email = email;

        await user.save();

        return res.status(201).send(user);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const deleteUser = async (req, res) => {

    try {

        const id = req.params.id;

        if (!id) {
            return res.status(400).send("id is required");
        }

        const user = await Users.destroy({ where: { id: id } });

        if (!user) {
            return res.status(404).send("User not found!");
        }

        return res.status(201).send(user);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const getAllUser = async (req, res) => {

    try {

        const users = await Users.findAll();

        if (!users) {
            return res.status(404).send("Users not found!");
        }

        return res.status(200).send(users);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = {
    createUser, updateUser, deleteUser, getAllUser
}