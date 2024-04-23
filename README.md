# Node.js CRUD Application with Express.js and MySQL

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and MySQL. It provides an API to manage todo items stored in a MySQL database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/node-crud-app.git

2. Navigate into the project directory:
   
   ```bash
   cd node-crud-app

3. Install dependencies:

   ```bash
   npm install

4. Set up your MySQL database:

  Create a MySQL database and a todos table using the provided SQL schema in schema.sql.
  Update the database connection details in the config.js file.
  
5. Start the server:

   ```bash
   node app.js

The server will start running on port 3000 by default. You can access the API at http://localhost:3000.

## Usage

### Endpoints

GET /todos: Retrieve all todos.
POST /todos: Create a new todo.
PUT /todos/:id: Update an existing todo by ID.
DELETE /todos/:id: Delete a todo by ID.

### API Requests
You can use tools like Postman to send requests to the API endpoints. Make sure to set the appropriate request type (GET, POST, PUT, DELETE) and include the necessary data (e.g., JSON payload for POST and PUT requests).

### Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License



   
