const Router = require("express").Router;
const Auth = require("../classes/Auth.js");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/AuthMiddleware.js");
const authMiddlewareAdmin = require("../middlewares/AuthMiddlewareAdmin.js");
const Artist = require("./../classes/Artist.js");
const Admin = require("./../classes/Admin.js");

router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  Auth.registration
);
router.post("/login", Auth.login);
router.post("/logout", Auth.logout);
router.get("/refresh", Auth.refresh);
router.get("/about-me", authMiddleware, Artist.getAboutMe);
router.get("/get-artists", authMiddlewareAdmin, Admin.getArtists);

module.exports = router;
