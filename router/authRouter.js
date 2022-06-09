const Router = require("express").Router;
const Auth = require("../classes/Auth.js");
const authRouter = new Router();

authRouter.post("/signup", Auth.registration);
authRouter.post("/login", Auth.login);
authRouter.post("/logout", Auth.logout);
authRouter.get("/refresh", Auth.refresh);

module.exports = authRouter;
