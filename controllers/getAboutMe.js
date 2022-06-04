const mysql = require("../models/database.js");
const ApiError = require("../exceptions/api-error.js");

async function getAboutMe(req, res, next) {
  try {
    const artistData = await mysql.execute(`
        select * from artists where fk_id_user = ${req.user.id_user}
        `);
    res.json(artistData[0][0]);
  } catch (e) {
    ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    next(e);
  }
  debugger;
}
module.exports = getAboutMe;
