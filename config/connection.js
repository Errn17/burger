const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Shotei1717!",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) {
    console.log("Error you are not connected to the database" + err.stack);
    return;
  }
  console.log("Connected as ID" + connection.threadId);
});

module.exports = connection;
