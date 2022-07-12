const { models } = require("../models/models-export.js");
const getPage = require("../shared/getPage.js");
const ApiError = require("../exceptions/ApiError.js");
const _ = require("lodash");
const clearProp = require("../shared/clearProp.js");

class TracksService {
  static async postTracks(track) {
    try {
      return models.tracks.create(track);
    } catch (e) {
      throw e;
    }
  }
  static async getTracks(fk_id_artist_contract) {
    try {
      return models.tracks.findAll({
        where: {
          fk_id_artist_contract: fk_id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
  static async getAllTracks(page, limit) {
    const offset = getPage(page, limit);
    return models.tracks.findAndCountAll({
      offset: offset,
      limit: limit,
      order: [["id_track", "ASC"]],
    });
  }
  static async deleteTrack(deleteTrack) {
    try {
      const { id_track } = deleteTrack;
      const track = await models.tracks.destroy({
        where: {
          id_track: id_track,
        },
      });
      if (track === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No tracks has been deleted");
      }
    } catch (e) {
      throw e;
    }
  }
  static async putTrack(puttedAct) {
    try {
      const { id_track } = puttedAct;
      const trackRemoveNull = clearProp(puttedAct, "null");
      const trackRemoveEmptyStr = clearProp(trackRemoveNull, "");
      const clearTrack = _.omitBy(trackRemoveEmptyStr, _.isUndefined);
      delete clearTrack.fk_id_user;
      delete clearTrack.id_track;
      const track = await models.tracks.update(clearTrack, {
        where: {
          id_track: id_track,
        },
      });
      if (track[0] === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No tracks has been updated");
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = TracksService;
