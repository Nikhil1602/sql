const express = require("express");
const buses = require("../controllers/busController");

const router = express.Router();

router.get("/available/:seatNo", buses.getAllBusesBySeats);
router.post("/", buses.createBus);

module.exports = router;