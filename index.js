const express = require("express");
const db = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/students", studentRoutes);
app.use("/buses", busRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

db.sync({ force: true }).then(() => {

    app.listen(3000, () => {
        console.log("Server listening on port 3000");
    });

}).catch((err) => {

    console.log(err);

});