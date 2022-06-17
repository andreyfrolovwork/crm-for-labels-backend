const Router = require("express").Router;
const artistRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const ArtistPanelController = require("../controllers/ArtistPanelController.js");
const checkArtistRole = AuthMiddleware.checkArtistRole.bind(AuthMiddleware);

artistRouter.get(
  "/about-me",
  checkArtistRole,
  ArtistPanelController.getAboutMe
);

module.exports = artistRouter;
