const Router = require("express").Router;
const adminRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);
const AdminPC = require("../controllers/AdminPanelController.js");

adminRouter.post("/get-artists", checkAdminRole, AdminPC.getArtists);
adminRouter.post("/post-artist", checkAdminRole, AdminPC.getArtists);
adminRouter.put("/put-artist", checkAdminRole, AdminPC.putArtist);
adminRouter.delete("/delete-artist", checkAdminRole, AdminPC.getArtists);
adminRouter.post("/get-users", checkAdminRole, AdminPC.getUsers);
adminRouter.put("/put-user", checkAdminRole, AdminPC.putUser);

adminRouter.post("/get-about-artist", checkAdminRole, AdminPC.getAboutArtist);

/*post routes*/
adminRouter.post("/post-act", checkAdminRole, AdminPC.postAct);
adminRouter.post("/post-album", checkAdminRole, AdminPC.postAlbum);
adminRouter.post("/post-track", checkAdminRole, AdminPC.postTracks);
adminRouter.post("/post-release", checkAdminRole, AdminPC.postRelease);
adminRouter.post("/post-videoclip", checkAdminRole, AdminPC.postVideoclip);

/*get routes*/
adminRouter.post("/get-acts", checkAdminRole, AdminPC.getActs);
adminRouter.post("/get-albums", checkAdminRole, AdminPC.getAlbums);
adminRouter.post("/get-tracks", checkAdminRole, AdminPC.getTracks);
adminRouter.post("/get-releases", checkAdminRole, AdminPC.getReleases);
adminRouter.post("/get-videoclips", checkAdminRole, AdminPC.getVideoclips);

module.exports = adminRouter;
