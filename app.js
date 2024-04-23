const express = require("express");
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoController");

const app = express();

app.use(bodyParser.json());

// Routes
app.get("/todos", todoController.getAllTodos);
app.post("/todos", todoController.createTodo);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
