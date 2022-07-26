const TracksService = require("../service/TracksService.js");
const fs = require("fs/promises");
const { models } = require("../models/models-export.js");

class TrackController {
  static async postTracks(req, res, next) {
    try {
      const { id_user } = req.user;
      const resCreate = await TracksService.postTracks({
        fk_id_user: id_user,
      });
      res.status(200).json({
        message: "ok",
      });
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
  static async getAllTracks(req, res, next) {
    try {
      let { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      if (!limit) {
        limit = 10;
      }
      const tracks = await TracksService.getAllTracks(page, limit);
      res.json(tracks);
    } catch (e) {
      next(e);
    }
  }
  static async deleteTrack(req, res, next) {
    try {
      const { id_track } = req.body;
      /*     valid([[isNumeric, id_track, {}, "Field id_act is not numeric"]]);*/
      await TracksService.deleteTrack({
        id_track: id_track,
      });
      res.status(200).json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }
  static async putTrack(req, res, next) {
    try {
      const {
        id_track,
        fk_id_album,
        fk_id_release,
        fk_id_user,
        fk_id_act,
        fk_id_artist_contract,
        id_for_dmg,
        author_of_music,
        author_of_text,
        phonogram_timing,
        date_of_registration,
        share_of_copyright,
        share_of_related_rights,
        rao,
        voice,
        zaicev,
        mix_upload,
        createdAt,
        PO,
        PO_number,
        UPC,
        ISRC,
        name,
      } = req.body;
      const { id_user } = req.user;
      const puttedTrack = {
        id_track,
        fk_id_album,
        fk_id_release,
        fk_id_user,
        fk_id_act,
        fk_id_artist_contract,
        id_for_dmg,
        author_of_music,
        author_of_text,
        phonogram_timing,
        date_of_registration,
        share_of_copyright,
        share_of_related_rights,
        rao,
        voice,
        zaicev,
        mix_upload,
        createdAt,
        PO,
        PO_number,
        UPC,
        ISRC,
        name,
        ...req.savedFiles,
      };
      await TracksService.putTrack(puttedTrack);
      res.status(200).json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = TrackController;
