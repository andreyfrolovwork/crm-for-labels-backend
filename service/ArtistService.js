const { models } = require("../models/models-export.js");
const ApiError = require("../exceptions/ApiError.js");
const _ = require("lodash");

class ArtistService {
  static async getAboutMe(id_user) {
    // noinspection JSCheckFunctionSignatures
    return models.artists.findOne({
      where: {
        fk_id_user: id_user,
      },
    });
  }
  static async getArtists(page, limit) {
    function getPage(page, limitForPage) {
      const offset = page * limitForPage - limitForPage;
      return offset;
    }
    const offset = getPage(page, limit);
    return models.artists.findAndCountAll({
      offset: offset,
      limit: limit,
      order: [["id_artist_contract", "ASC"]],
    });
  }

  static async putArtist(puttedArtist) {
    try {
      const { id_artist_contract } = puttedArtist;
      let clearArtist = _.omitBy(puttedArtist, _.isUndefined);
      delete puttedArtist.fk_id_artist_contract;
      delete puttedArtist.fk_id_user;
      const artist = await models.artists.update(clearArtist, {
        where: {
          id_artist_contract: id_artist_contract,
        },
      });
      if (artist[0] === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No post has been updated");
      }
    } catch (e) {
      throw e;
    }
  }
  static async getAboutArtist(id_artist_contract) {
    try {
      return models.artists.findOne({
        where: {
          id_artist_contract: id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ArtistService;
