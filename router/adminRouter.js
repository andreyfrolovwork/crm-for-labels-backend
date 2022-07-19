const Router = require("express").Router;
const router = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);
const AdminPC = require("../controllers/AdminPanelController.js");
const fileMiddleware = require("../middlewares/FileMiddleware.js");
const TrackController = require("../controllers/TrackController.js");
const ActController = require("../controllers/ActController.js");

/* artist */
router.get("/get-artists", checkAdminRole, AdminPC.getArtists);
router.post("/post-artist", checkAdminRole, AdminPC.getArtists);
router.put("/put-artist", checkAdminRole, AdminPC.putArtist);
router.delete("/delete-artist", checkAdminRole, AdminPC.getArtists);
router.post("/get-about-artist", checkAdminRole, AdminPC.getAboutArtist);

/* user */
router.get("/get-users", checkAdminRole, AdminPC.getUsers);
router.put("/put-user", checkAdminRole, AdminPC.putUser);

/* act */
router.get("/get-acts", checkAdminRole, ActController.getActs);
router.post("/post-act", checkAdminRole, ActController.postAct);
router.put("/put-act", checkAdminRole, ActController.putAct);
router.delete("/delete-act", checkAdminRole, ActController.deleteAct);

/* release */
router.post("/get-releases", checkAdminRole, AdminPC.getReleases);
router.post("/post-release", checkAdminRole, AdminPC.postRelease);

/* albums */
router.post("/get-albums", checkAdminRole, AdminPC.getAlbums);
router.post("/post-album", checkAdminRole, AdminPC.postAlbum);

/* videoclips */

router.post("/get-videoclips", checkAdminRole, AdminPC.getVideoclips);
router.post("/post-videoclip", checkAdminRole, AdminPC.postVideoclip);

/* tracks */
router.post("/get-tracks", checkAdminRole, TrackController.getTracks);
router.post("/post-track", checkAdminRole, TrackController.postTracks);
router.get("/get-all-tracks", checkAdminRole, TrackController.getAllTracks);
router.delete("/delete-track", checkAdminRole, TrackController.deleteTrack);
router.put("/put-track", checkAdminRole, fileMiddleware.any(), TrackController.putTrack);

module.exports = router;
