const Booking = require("../models/bookings");

const createBooking = async (req, res) => {

    try {

        const userId = req.body.userId;
        const busId = req.body.busId;
        const seatNo = req.body.seatNumber;

        const booking = await Booking.create({
            busId: busId,
            seatNumber: seatNo,
            userId: userId
        });

        return res.status(201).send(booking);

    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = {
    createBooking
}