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

// noinspection JSUnusedLocalSymbols
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
      const artistAboutAll = await ArtistService.getAboutArtist(
        id_artist_contract
      );
      res.json(artistAboutAll);
    } catch (e) {
      next(e);
    }
  }

  /*
  post routes post routes post routes post routes post routes post routes post routes
  */
  static async postAct(req, res, next) {
    try {
      const act = req.body;
      const { id_user } = req.user;
      const resCreate = await ActServic.postAct({
        ...act,
        fk_id_user: id_user,
      });
      res.status(200).json({
        message: "ok",
      });
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
  static async postTracks(req, res, next) {
    try {
      const track = req.body;
      const { id_user } = req.user;
      const resCreate = await TracksService.postTracks({
        ...track,
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
  /*
  get routes get routes get routes get routes get routes get routes get routes
  */
  static async getActs(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const acts = await ActServic.getActs(fk_id_artist_contract);
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
  static async getTracks(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const tracks = await TracksService.getTracks(fk_id_artist_contract);
      res.json(tracks);
    } catch (e) {
      next(e);
    }
  }
  static async getVideoclips(req, res, next) {
    try {
      const { fk_id_artist_contract } = req.body;
      const videoclips = await VideoclipsService.getVideoclips(
        fk_id_artist_contract
      );
      res.json(videoclips);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AdminPanelController;
