const Router = require("express").Router;
const artistRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkArtistRole = AuthMiddleware.checkArtistRole.bind(AuthMiddleware);
const ArtistClass = require("../classes/ArtistClass.js");

artistRouter.get("/about-me", checkArtistRole, ArtistClass.getAboutMe);

module.exports = artistRouter;
