const db = require("../utils/db");

const createBus = (req, res) => {

    const busNo = req.body.busNumber;
    const totalSeats = req.body.totalSeats;
    const availableSeats = req.body.availableSeats;

    const query = `
        INSERT INTO Buses (busNumber, totalSeats, availableSeats)
        VALUES (?, ?, ?)
    `;

    db.query(query, [busNo, totalSeats, availableSeats], (error) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        return res.status(201).send("Bus created successfully!");

    })

}

const getAllBusesBySeats = (req, res) => {

    const seatNo = req.params.seatNo;

    const query = `
        SELECT * FROM Buses
        WHERE availableSeats > ?
    `;

    db.query(query, [seatNo], (error, result) => {

        if (error) {
            console.log(error);
            db.end();
            return res.status(500).send("Something went wrong!")
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Bus not found");
        }

        return res.status(200).send(result);

    });

}

module.exports = {
    createBus, getAllBusesBySeats
}