const { models } = require("../models/models-export.js");

class AlbumService {
  static async postAlbum(album) {
    try {
      return models.albums.create(album);
    } catch (e) {
      throw e;
    }
  }
  static async getAlbums(fk_id_artist_contract) {
    try {
      return models.albums.findAll({
        where: {
          fk_id_artist_contract: fk_id_artist_contract,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = AlbumService;
