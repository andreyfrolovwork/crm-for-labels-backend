const Router = require("express").Router;
const adminRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);

const Admin = require("./../classes/Admin.js");

adminRouter.get("/get-artists", checkAdminRole, Admin.getArtists);
adminRouter.post("/post-artist", checkAdminRole, Admin.getArtists);
adminRouter.put("/put-artist", checkAdminRole, Admin.putArtist);
adminRouter.delete("/delete-artist", checkAdminRole, Admin.getArtists);

adminRouter.get("/get-users", checkAdminRole, Admin.getUsers);
adminRouter.put("/put-user", checkAdminRole, Admin.putUser);

module.exports = adminRouter;
