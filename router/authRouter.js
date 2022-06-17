const Router = require("express").Router;
const AuthClass = require("../service/AuthService.js");
const authRouter = new Router();

authRouter.post("/signup", AuthClass.registration);
authRouter.post("/login", AuthClass.login);
authRouter.post("/logout", AuthClass.logout);
authRouter.get("/refresh", AuthClass.refresh);

module.exports = authRouter;
