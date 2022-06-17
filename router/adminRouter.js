const Router = require("express").Router;
const adminRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);
const ArtistPanelController = require("../controllers/AdminPanelController.js");

adminRouter.get(
  "/get-artists",
  checkAdminRole,
  ArtistPanelController.getArtists
);
adminRouter.post(
  "/post-artist",
  checkAdminRole,
  ArtistPanelController.getArtists
);
adminRouter.put("/put-artist", checkAdminRole, ArtistPanelController.putArtist);
adminRouter.delete(
  "/delete-artist",
  checkAdminRole,
  ArtistPanelController.getArtists
);
adminRouter.get("/get-users", checkAdminRole, ArtistPanelController.getUsers);
adminRouter.put("/put-user", checkAdminRole, ArtistPanelController.putUser);

module.exports = adminRouter;
