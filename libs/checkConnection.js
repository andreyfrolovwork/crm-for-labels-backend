const sql = require("./postgres.js");

async function checkConnection() {
  try {
    await sql`select id_user
                  from users
                  limit 1`;
  } catch (e) {
    throw Error("Error connecting to database");
  } finally {
    console.log("The connection to the database was established successfully.");
  }
}

module.exports = checkConnection;
