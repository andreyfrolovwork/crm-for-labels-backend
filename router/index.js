const authRouter = require("./authRouter.js");
const adminRouter = require("./adminRouter.js");
const artistRouter = require("./artistRouter.js");
module.exports = (app) => {
  app.use("/crm-api", authRouter);
  app.use("/crm-api/admin", adminRouter);
  app.use("/crm-api/artist", artistRouter);
};
