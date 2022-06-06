const sql = require("./../models/postgres.js");

async function getArtists(req, res, next) {
  try {
    const users = await sql`
        select * from artists
        `;

    res.json(users);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = getArtists;
