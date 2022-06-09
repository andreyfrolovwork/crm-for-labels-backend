const Router = require("express").Router;
const artistRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkArtistRole = AuthMiddleware.checkArtistRole.bind(AuthMiddleware);
const Artist = require("./../classes/Artist.js");

artistRouter.get("/about-me", checkArtistRole, Artist.getAboutMe);

module.exports = artistRouter;
