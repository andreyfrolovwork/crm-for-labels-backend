const mysql = require("./../models/database.js");

async function getArtists(req, res, next) {
  try {
    const users = await mysql.execute(`
        select * from artists
        `);

    res.json(users[0]);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = getArtists;
