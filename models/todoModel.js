const mysql = require("mysql");
const config = require("../config");

const pool = mysql.createPool(config.database);

class Todo {
  static getAll(callback) {
    pool.query("SELECT * FROM todos", (error, results) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  static create(data, callback) {
    pool.query("INSERT INTO todos SET ?", data, (error, results) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  static update(id, data, callback) {
    pool.query(
      "UPDATE todos SET ? WHERE id = ?",
      [data, id],
      (error, results) => {
        if (error) return callback(error);
        callback(null, results);
      }
    );
  }

  static delete(id, callback) {
    pool.query("DELETE FROM todos WHERE id = ?", id, (error, results) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }
}

module.exports = Todo;
