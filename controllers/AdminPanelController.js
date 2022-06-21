const UserService = require("../service/UserService.js");
const ArtistService = require("../service/ArtistService.js");

class AdminPanelController {
  static async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
  static async putUser(req, res, next) {
    try {
      const { id_user, email, created_at, deleted, role } = req.body;
      const user = await UserService.putUser(
        {
          id_user: id_user,
          email: email,
          created_at: created_at,
          deleted: deleted,
          role: role,
        },
        next
      );
      res.json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
  static async getArtists(req, res, next) {
    try {
      const artists = await ArtistService.getArtists();
      res.json(artists);
    } catch (e) {
      next(e);
    }
  }

  static async putArtist(req, res, next) {
    try {
      const {
        id_artist_contract,
        fk_id_user,
        creative_pseudonym,
        surname,
        name,
        patronymic,
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

      const savedArtist = await ArtistService.putArtist({
        id_artist_contract: id_artist_contract,
        fk_id_user: fk_id_user,
        creative_pseudonym: creative_pseudonym,
        surname: surname,
        name: name,
        patronymic: patronymic,
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
      res.status(200).json({
        message: "ok",
      });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = AdminPanelController;
