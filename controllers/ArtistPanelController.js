const ArtistService = require("../service/ArtistService.js");

class ArtistPanelController {
  static async getAboutMe(req, res, next) {
    try {
      const { id_user } = req.user;
      const resAbout = await ArtistService.getAboutMe(id_user);
      res.json(resAbout);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ArtistPanelController;
