const Router = require("express").Router;
const Auth = require("../classes/Auth.js");
const router = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkArtistRole = AuthMiddleware.checkArtistRole.bind(AuthMiddleware);
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);

const Artist = require("./../classes/Artist.js");
const Admin = require("./../classes/Admin.js");

router.post("/signup", Auth.registration);
router.post("/login", Auth.login);
router.post("/logout", Auth.logout);
router.get("/refresh", Auth.refresh);
router.get("/about-me", checkArtistRole, Artist.getAboutMe);
router.get("/get-artists", checkAdminRole, Admin.getArtists);

router.get("/admin/artists", checkAdminRole, Admin.getArtists);
router.post("/admin/artists", checkAdminRole, Admin.getArtists);
router.put("/admin/artists", checkAdminRole, Admin.putArtist);
router.delete("/admin/artists", checkAdminRole, Admin.getArtists);

module.exports = router;
