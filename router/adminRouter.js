const Router = require("express").Router;
const adminRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);
const AdminPC = require("../controllers/AdminPanelController.js");
const fileMiddleware = require("../middlewares/FileMiddleware.js");

adminRouter.get("/get-artists", checkAdminRole, AdminPC.getArtists);
adminRouter.post("/post-artist", checkAdminRole, AdminPC.getArtists);
adminRouter.put("/put-artist", checkAdminRole, AdminPC.putArtist);
adminRouter.delete("/delete-artist", checkAdminRole, AdminPC.getArtists);
adminRouter.get("/get-users", checkAdminRole, AdminPC.getUsers);
adminRouter.put("/put-user", checkAdminRole, AdminPC.putUser);

adminRouter.post("/get-about-artist", checkAdminRole, AdminPC.getAboutArtist);

/*post routes*/
adminRouter.post("/post-act", checkAdminRole, AdminPC.postAct);
adminRouter.put("/put-act", checkAdminRole, AdminPC.putAct);
adminRouter.delete("/delete-act", checkAdminRole, AdminPC.deleteAct);

adminRouter.post("/post-album", checkAdminRole, AdminPC.postAlbum);

adminRouter.post("/post-release", checkAdminRole, AdminPC.postRelease);
adminRouter.post("/post-videoclip", checkAdminRole, AdminPC.postVideoclip);

/*get routes for current artist*/
adminRouter.get("/get-acts", checkAdminRole, AdminPC.getActs);
adminRouter.post("/get-albums", checkAdminRole, AdminPC.getAlbums);
adminRouter.post("/get-tracks", checkAdminRole, AdminPC.getTracks);
adminRouter.post("/get-releases", checkAdminRole, AdminPC.getReleases);
adminRouter.post("/get-videoclips", checkAdminRole, AdminPC.getVideoclips);

// routes for entities
adminRouter.post("/post-track", checkAdminRole, AdminPC.postTracks);
adminRouter.get("/get-all-tracks", checkAdminRole, AdminPC.getAllTracks);
adminRouter.delete("/delete-track", checkAdminRole, AdminPC.deleteTrack);
adminRouter.put(
  "/put-track",
  checkAdminRole,
  fileMiddleware.single("record"),
  AdminPC.putTrack
);
module.exports = adminRouter;
