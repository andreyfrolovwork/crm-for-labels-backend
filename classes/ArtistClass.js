const Artist = require("./../models/Artist.js");

class ArtistClass {
  async getAboutMe(req, res, next) {
    try {
      const { id_user } = req.user;
      const resAbout = await Artist.getAboutMe(id_user);
      res.json(resAbout);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ArtistClass();
