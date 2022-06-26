const { models } = require("../models/models-export.js");

class ActService {
  static async postAct(act) {
    try {
      return models.acts.create(act);
    } catch (e) {
      throw e;
    }
  }
  static async getActs(fk_id_artist_contract) {
    try {
      return models.acts.findAll({
        where: {
          fk_id_artist_contract: fk_id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ActService;
