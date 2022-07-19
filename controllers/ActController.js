const ActServic = require("../service/ActService.js");
const valid = require("../shared/valid.js");
const { isNumeric, isDate, isInt } = require("validator");
const ActService = require("../service/ActService.js");
const isNumber = require("../shared/checkClass.js");

class ActController {
  static async getActs(req, res, next) {
    try {
      // eslint-disable-next-line prefer-const
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
        [isNumber, id_act, {}, "Field id_act is not a numeric"],
        [isNumber, fk_id_artist_contract, {}, "Field fk_id_artist_contract is not a numeric"],
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
      valid([[isNumber, id_act, {}, "Field id_act is not number"]]);
      await ActService.deleteAct({
        id_act: id_act,
      });
      res.status(200).json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ActController;
