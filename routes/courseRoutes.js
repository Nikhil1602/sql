const express = require("express");
const courses = require("../controllers/courseController");

const router = express.Router();

router.post("/", courses.addCourse);

module.exports = router;