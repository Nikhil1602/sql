const express = require("express");
const users = require("../controllers/userController");

const router = express.Router();

router.get("/", users.getAllUser);
router.get("/:id/bookings", users.getAllUserBookings);
router.post("/", users.createUser);
router.put("/:id", users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;