const express = require("express");
const users = require("../controllers/userController");

const router = express.Router();

router.post("/", users.createUser);
router.put("/:id", users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;