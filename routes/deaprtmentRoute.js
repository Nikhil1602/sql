const express = require("express");
const departments = require("../controllers/departmentController");

const router = express.Router();

router.post("/", departments.assignDepartment);

module.exports = router;