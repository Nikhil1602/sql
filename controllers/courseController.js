const Courses = require("../models/courses");

const addCourse = async (req, res) => {

    try {

        const { name } = req.body;
        const course = await Courses.create({ "name": name });

        return res.status(201).json(course);


    } catch (err) {

        console.log(err);
        return res.status(500).send("Something went wrong!");

    }

}

module.exports = { addCourse };