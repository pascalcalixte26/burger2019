var mysql = require("mysql");

const connectionValue = process.env.JAWSDB_URL || {
  host: "localhost",
  port: 8682,
  user: "root",
  password: "root",
  database: "burgers_db"
};

var connection = mysql.createConnection(connectionValue);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;