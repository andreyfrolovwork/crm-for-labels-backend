const { models } = require("../models/models-export.js");

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
}

module.exports = TracksService;
