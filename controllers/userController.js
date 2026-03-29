const Bookings = require("../models/bookings");
const Users = require("../models/users");

const createUser = async (req, res) => {

    try {

        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const age = req.body.age;

        const user = await Users.create({
            name: name,
            email: email,
            phone: phone,
            age: age
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
        const phone = req.body.phone;
        const age = req.body.age;

        if (!name || !email) {
            return res.status(400).send("Name and email are required");
        }

        const user = await Users.findByPk(id);

        if (!user) {
            return res.status(404).send("User not found!");
        }

        user.name = name;
        user.email = email;
        user.phone = phone;
        user.age = age;

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

const getAllUserBookings = async (req, res) => {

    try {

        const bookings = await Bookings.findAll({
            where: { userId: req.params.id },
            attributes: ["id", "seatNumber"],
            include: {
                association: "bus",
                attributes: ["busNumber"]
            }
        });

        const result = bookings.map(b => ({
            id: b.id,
            seatNumber: b.seatNumber,
            bus: {
                busNumber: b.bus?.busNumber
            }
        }));

        if (!bookings || result.length === 0) {
            return res.status(404).send("Bookings not found!");
        }

        return res.status(200).json(result);


    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = {
    createUser, updateUser, deleteUser, getAllUser, getAllUserBookings
}