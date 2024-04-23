const Todo = require("../models/todoModel");

exports.getAllTodos = (req, res) => {
  Todo.getAll((error, todos) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });
    res.json(todos);
  });
};

exports.createTodo = (req, res) => {
  const data = req.body;
  Todo.create(data, (error, result) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });
    res.json({ message: "Todo created successfully", id: result.insertId });
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Todo.update(id, data, (error, result) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });
    res.json({ message: "Todo updated successfully" });
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.delete(id, (error, result) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });
    res.json({ message: "Todo deleted successfully" });
  });
};
