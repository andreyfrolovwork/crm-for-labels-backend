const sql = require("../models/postgres.js");

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
    const user = req.body;
    try {
      const newArtist = await sql`
            update artists
            set ${sql(
              user,
              "creative_pseudonym"
              /* "name_2",
          "name_1"
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
            "contract_expiration_date"*/
            )}
            where id_artist_contract = ${user.id_artist_contract}
        `;
      debugger;
    } catch (e) {
      console.log(e);
      debugger;
    }
  }
}

module.exports = new Admin();
