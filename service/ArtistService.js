const Artist = require("../models/Artist.js");

class ArtistService {
  static async getAboutMe(id_user) {
    try {
      return Artist.getAboutMe(id_user);
    } catch (e) {
      throw e;
    }
  }
  static async getArtists() {
    return Artist.getAll();
  }

  static async putArtist(puttedArtist) {
    try {
      const artist = new Artist(puttedArtist);
      return await artist.save();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ArtistService;
