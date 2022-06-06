const Router = require("express").Router;
const userClass = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const authMiddlewareAdmin = require("../middlewares/auth-middleware-admin");
const getArtists = require("../controllers/getArtists.js");
const getAboutMe = require("../controllers/getAboutMe.js");

router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userClass.registration
);
router.post("/login", userClass.login);
router.post("/logout", userClass.logout);
router.get("/refresh", userClass.refresh);
router.get("/about-me", authMiddleware, getAboutMe);
router.get("/get-artists", authMiddlewareAdmin, getArtists);

module.exports = router;
