const Expense = require("../models/expense");

// CREATE
exports.createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.json(expense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll({
            order: [["createdAt", "DESC"]]
        });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE (Bonus)
exports.updateExpense = async (req, res) => {
    try {
        await Expense.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ message: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};