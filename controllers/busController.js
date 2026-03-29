const { Op } = require("sequelize");
const Buses = require("../models/buses");
const Bookings = require("../models/bookings");

const createBus = (req, res) => {

    try {

        const busNo = req.body.busNumber;
        const totalSeats = req.body.totalSeats;
        const availableSeats = req.body.availableSeats;

        const bus = Buses.create({
            busNumber: busNo,
            totalSeats: totalSeats,
            availableSeats: availableSeats
        });

        return res.status(201).send(bus);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const getAllBusesBySeats = (req, res) => {

    try {

        const seatNo = req.params.seatNo;

        const buses = Buses.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seatNo
                }
            }
        });

        if (!buses) {
            return res.status(404).send("No buses found!");
        }

        return res.status(200).send(buses);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

const getBusesByBookings = async (req, res) => {

    try {

        const bookings = await Bookings.findAll({
            where: { busId: req.params.id },
            attributes: ["id", "seatNumber"],
            include: {
                association: "user",
                attributes: ["name", "email"]
            }
        });

        const result = bookings.map(b => ({
            id: b.id,
            seatNumber: b.seatNumber,
            user: {
                name: b.user?.name,
                email: b.user?.email
            }
        }));

        if (!bookings || result.length === 0) {
            return res.status(404).send("No bookings found!");
        }

        return res.status(200).send(result);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = {
    createBus, getAllBusesBySeats, getBusesByBookings
}