const { models } = require("../models/models-export.js");

class ReleasesService {
  static async postRelease(release) {
    try {
      return models.releases.create(release);
    } catch (e) {
      throw e;
    }
  }
  static async getReleases(fk_id_artist_contract) {
    try {
      return models.releases.findAll({
        where: {
          fk_id_artist_contract: fk_id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ReleasesService;
