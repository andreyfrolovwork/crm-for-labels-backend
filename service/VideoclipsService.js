const { models } = require("../models/models-export.js");

class VideoclipsService {
  static async postVideoclip(videoclip) {
    try {
      return models.videoclips.create(videoclip);
    } catch (e) {
      throw e;
    }
  }
  static async getVideoclips(fk_id_artist_contract) {
    try {
      return models.videoclips.findAll({
        where: {
          fk_id_artist_contract: fk_id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = VideoclipsService;
