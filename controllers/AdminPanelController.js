const UserService = require("../service/UserService.js");
const ArtistService = require("../service/ArtistService.js");
const ApiError = require("../exceptions/ApiError.js");
const ActServic = require("../service/ActService.js");
const ActService = require("../service/ActService.js");
const AlbumsService = require("../service/AlbumService.js");
const ReleasesService = require("../service/ReleasesService.js");
const TracksService = require("../service/TracksService.js");
const VideoclipsService = require("../service/VideoclipsService.js");
const AlbumService = require("../service/AlbumService.js");
const { isNumeric, isDate } = require("validator");
const valid = require("../shared/valid.js");
const fs = require("fs/promises");
const { models } = require("../models/models-export.js");

class AdminPanelController {
  static async getUsers(req, res, next) {
    try {
      let { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      if (!limit) {
        limit = 10;
      }
      const users = await UserService.getUsers(page, limit);
      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  static async putUser(req, res, next) {
    try {
      const { id_user, email, createdAt, updatedAt, deleted, role } = req.body;

      const user = await UserService.putUser(
        {
          id_user: id_user,
          email: email,
          createdAt: createdAt,
          updatedAt: updatedAt,
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
      let { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      if (!limit) {
        limit = 10;
      }
      const artists = await ArtistService.getArtists(page, limit);
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

  static async getAboutArtist(req, res, next) {
    try {
      const { id_artist_contract } = req.body;
      if (!id_artist_contract) {
        throw ApiError.BadRequest("id_artist_contract undefined");
      }
      const artistAboutAll = await ArtistService.getAboutArtist(id_artist_contract);
      res.json(artistAboutAll);
    } catch (e) {
      next(e);
    }
  }

  static async postAct(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      valid([[isNumeric, fk_id_artist_contract, {}, "Id artist_contrac is not numeric"]]);
      const { id_user } = req.user;
      const act = {
        fk_id_artist_contract,
        fk_id_user: id_user,
      };
      const resCreate = await ActServic.postAct(act);
      res.status(200).json({
        message: "ok",
      });
    } catch (e) {
      next(e);
    }
  }

  static async putAct(req, res, next) {
    try {
      const { id_act, fk_id_artist_contract, createdAt } = req.body;
      const { id_user } = req.user;
      valid([
        [isNumeric, id_act, {}, "Field id_act is not a numeric"],
        [isNumeric, fk_id_artist_contract, {}, "Field fk_id_artist_contract is not a numeric"],
        [isDate, createdAt, {}, "Field createdAt is not a date"],
      ]);
      const puttedAct = {
        id_act,
        fk_id_user: id_user,
        fk_id_artist_contract,
        createdAt,
      };
      await ActService.putAct(puttedAct);
      res.status(200).json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }

  static async deleteAct(req, res, next) {
    try {
      const { id_act } = req.body;
      valid([[isNumeric, id_act, {}, "Field id_act is not numeric"]]);
      await ActService.deleteAct({
        id_act: id_act,
      });
      res.status(200).json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }

  static async postAlbum(req, res, next) {
    try {
      const album = req.body;
      const { id_user } = req.user;
      const resCreate = await AlbumsService.postAlbum({
        ...album,
        fk_id_user: id_user,
      });
      res.status(200).json({
        message: "ok",
      });
    } catch (e) {
      next(e);
    }
  }

  static async postRelease(req, res, next) {
    try {
      const release = req.body;
      const { id_user } = req.user;
      const resCreate = await ReleasesService.postRelease({
        ...release,
        fk_id_user: id_user,
      });
      res.status(200).json({
        message: "ok",
      });
    } catch (e) {
      next(e);
    }
  }

  static async postVideoclip(req, res, next) {
    try {
      const videoclip = req.body;
      const { id_user } = req.user;
      const resCreate = await VideoclipsService.postVideoclip({
        ...videoclip,
        fk_id_user: id_user,
      });
      res.status(200).json({
        message: "ok",
      });
    } catch (e) {
      next(e);
    }
  }

  static async getActs(req, res, next) {
    try {
      let { page, limit, fk_id_artist_contract } = req.query;
      if (!page) {
        page = 1;
      }

      if (!limit) {
        limit = 10;
      }
      const acts = await ActServic.getActs({
        fk_id_artist_contract: fk_id_artist_contract,
        page: page,
        limit: limit,
      });
      res.json(acts);
    } catch (e) {
      next(e);
    }
  }

  static async getAlbums(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const albums = await AlbumService.getAlbums(fk_id_artist_contract);
      res.json(albums);
    } catch (e) {
      next(e);
    }
  }

  static async getReleases(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const releases = await ReleasesService.getReleases(fk_id_artist_contract);
      res.json(releases);
    } catch (e) {
      next(e);
    }
  }

  static async getVideoclips(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const videoclips = await VideoclipsService.getVideoclips(fk_id_artist_contract);
      res.json(videoclips);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AdminPanelController;
