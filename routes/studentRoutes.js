const express = require("express");
const students = require("../controllers/studentController");

const router = express.Router();

router.get("/", students.getAllStudents);
router.get("/:id", students.getStudent);
router.post("/", students.createStudent);
router.put("/:id", students.updateStudent);
router.delete("/:id", students.deleteStudent);

module.exports = router;