const sql = require("../libs/postgres.js");
const ApiError = require("../exceptions/ApiError.js");
const User = require("./../models/User.js");
const Artist = require("./../models/Artist.js");

class AdminClass {
  async getArtists(req, res, next) {
    try {
      const users = await Artist.getAll(next);
      res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async putArtist(req, res, next) {
    try {
      const {
        id_artist_contract,
        fk_id_user,
        creative_pseudonym,
        name_2,
        name_1,
        name_3,
        document,
        address,
        email,
        inn,
        snils,
        bank_details,
        contract_number,
        contract_agreement,
        contract_fee,
        contract_fee_in_words,
        contract_expiration_date,
        deleted,
      } = req.body;

      const user = new Artist({
        id_artist_contract: id_artist_contract,
        fk_id_user: fk_id_user,
        creative_pseudonym: creative_pseudonym,
        name_2: name_2,
        name_1: name_1,
        name_3: name_3,
        document: document,
        address: address,
        email: email,
        inn: inn,
        snils: snils,
        bank_details: bank_details,
        contract_number: contract_number,
        contract_agreement: contract_agreement,
        contract_fee: contract_fee,
        contract_fee_in_words: contract_fee_in_words,
        contract_expiration_date: contract_expiration_date,
        deleted: deleted,
      });
      await user.save();
      res.json("good");
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async putUser(req, res, next) {
    try {
      const { id_user, email, created_at, deleted, role } = req.body;
      const user = new User({
        id_user: id_user,
        email: email,
        created_at: created_at,
        deleted: deleted,
        role: role,
      });
      await user.save();
      res.json("good");
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new AdminClass();
