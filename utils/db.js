require('dotenv').config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    multipleStatements: true
});

connection.connect((err) => {

    if (err) {
        console.log(err);
        return;
    }

    const query = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        );

        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255),
            totalSeats INT,
            availableSeats INT
        );

        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber VARCHAR(255)
        );

        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid VARCHAR(255),
            paymentStatus VARCHAR(255)
        );
    `;

    connection.query(query, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }

        console.log("Users, Buses, Bookings, and Payments tables created...");
    })

});

module.exports = connection;