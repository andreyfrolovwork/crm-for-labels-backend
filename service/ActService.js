const { models } = require("../models/models-export.js");
const getPage = require("../shared/getPage.js");
const _ = require("lodash");
const ApiError = require("../exceptions/ApiError.js");

class ActService {
  static async postAct(act) {
    try {
      return models.acts.create(act);
    } catch (e) {
      throw e;
    }
  }
  static async getActs(props) {
    try {
      const offset = getPage(props.page, props.limit);
      return models.acts.findAndCountAll({
        where: {
          fk_id_artist_contract: props.fk_id_artist_contract,
        },
        offset: offset,
        limit: props.limit,
        order: [["id_act", "ASC"]],
      });
    } catch (e) {
      throw e;
    }
  }
  static async putAct(puttedAct) {
    try {
      const { id_act } = puttedAct;
      const clearAct = _.omitBy(puttedAct, _.isUndefined);
      delete clearAct.fk_id_user;
      delete clearAct.fk_id_artist_contract;
      delete clearAct.id_act;
      const act = await models.acts.update(clearAct, {
        where: {
          id_act: id_act,
        },
      });
      if (act[0] === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No acts has been updated");
      }
    } catch (e) {
      throw e;
    }
  }
  static async deleteAct(deletedAct) {
    try {
      const { id_act } = deletedAct;
      const act = await models.acts.destroy({
        where: {
          id_act: id_act,
        },
      });
      if (act === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No acts has been deleted");
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ActService;
