const sql = require("../models/postgres.js");
const ApiError = require("../exceptions/ApiError.js");

class Artist {
  async getAboutMe(req, res, next) {
    try {
      const artistData = await sql`
                select *
                from artists
                where fk_id_user = ${req.user.id_user}
                limit 1
            `;
      if (artistData.length === 1) {
        res.json(artistData[0]);
      } else {
        throw ApiError.DatabaseError(
          "Ошибка при взаимодействии с базой данных"
        );
      }
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
      next(e);
    }
  }
}

module.exports = new Artist();
