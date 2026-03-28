require('dotenv').config();

const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

connection.connect((err) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection established...");
    const query = `
        CREATE TABLE IF NOT EXISTS Students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(20)
        )
    `;

    connection.execute(query, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }

        console.log("Students Table created...");
    })

});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});