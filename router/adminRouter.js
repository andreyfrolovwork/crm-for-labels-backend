const Router = require("express").Router;
const adminRouter = new Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");
const checkAdminRole = AuthMiddleware.checkAdminRole.bind(AuthMiddleware);

const AdminClass = require("../classes/AdminClass.js");

adminRouter.get("/get-artists", checkAdminRole, AdminClass.getArtists);
adminRouter.post("/post-artist", checkAdminRole, AdminClass.getArtists);
adminRouter.put("/put-artist", checkAdminRole, AdminClass.putArtist);
adminRouter.delete("/delete-artist", checkAdminRole, AdminClass.getArtists);

adminRouter.get("/get-users", checkAdminRole, AdminClass.getUsers);
adminRouter.put("/put-user", checkAdminRole, AdminClass.putUser);

module.exports = adminRouter;
