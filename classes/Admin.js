const sql = require("../models/postgres.js");
const ApiError = require("../exceptions/ApiError.js");

class Admin {
  async getArtists(req, res, next) {
    try {
      const users = await sql`
                select *
                from artists
            `;

      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async putArtist(req, res, next) {
    const user = {
      ...req.body,
      deleted: JSON.parse(req.body.deleted),
    };
    try {
      const newArtist = await sql`
                update artists
                set ${sql(
                  user,
                  "creative_pseudonym",
                  "name_2",
                  "name_1",
                  "name_3",
                  "document",
                  "address",
                  "email",
                  "inn",
                  "snils",
                  "bank_details",
                  "contract_number",
                  "contract_agreement",
                  "contract_fee",
                  "contract_fee_in_words",
                  "contract_expiration_date",
                  "deleted"
                )}
                where id_artist_contract = ${user.id_artist_contract}
            `;
      if (newArtist.count === 1) {
        res.json("good");
      } else {
        throw ApiError.DatabaseError(
          "Ошибка при взаимодействии с базой данных"
        );
      }
      debugger;
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async postArtist(req, res, next) {
    const artist = req.body;
    try {
      const addUser = await sql`insert into artists ${sql(
        artist,
        "creative_pseudonym",
        "name_2",
        "name_1",
        "name_3",
        "document",
        "address",
        "email",
        "inn",
        "snils",
        "bank_details",
        "contract_number",
        "contract_agreement",
        "contract_fee",
        "contract_fee_in_words",
        "contract_expiration_date"
      )}`;
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      const users = await sql`
                select id_user, email, password, role, created_at, deleted
                from users
            `;

      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async putUser(req, res, next) {
    const user = {
      ...req.body,
      deleted: JSON.parse(req.body.deleted),
    };

    try {
      const newUsers = await sql`
                update users
                set ${sql(user, "email", "created_at", "deleted", "role")}
                where id_user = ${user.id_user}
            `;
      if (newUsers.count === 1) {
        res.json("good");
      } else {
        throw ApiError.DatabaseError(
          "Ошибка при взаимодействии с базой данных"
        );
      }
      debugger;
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new Admin();
