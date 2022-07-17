<<<<<<< HEAD
require("module-alias/register");
const { sequelize } = require("Md/models-export.js");

const PORT = process.env.APP_PORT;
<<<<<<< HEAD
const app = require("@/app.js");
=======
const app = require("./app.js");
=======
// noinspection JSCheckFunctionSignatures
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/ErrorMiddleware.js");
const artistRouter = require("./router/artistRouter.js");
const adminRouter = require("./router/adminRouter.js");
const authRouter = require("./router/authRouter.js");
const { sequelize } = require("./models/models-export.js");

const PORT = process.env.APP_PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

// noinspection JSCheckFunctionSignatures
app.use("/crm-api", authRouter);
// noinspection JSCheckFunctionSignatures
app.use("/crm-api/admin", adminRouter);
// noinspection JSCheckFunctionSignatures
app.use("/crm-api/artist", artistRouter);

app.use(errorMiddleware);

>>>>>>> 380db967db1bb68aa4a787f2f12600e87b034e33
<<<<<<< HEAD
=======
>>>>>>> 48a56f9dd03e662447d2ac6bd666c3978c66f8f4
>>>>>>> e9305fda16a4caa1e9f17504be741152f1784b62
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () =>
      console.log(`Server has been started on port: ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start().then();
