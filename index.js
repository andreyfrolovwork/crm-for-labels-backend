const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/ErrorMiddleware.js");
const sql = require("./libs/postgres.js");
const artistRouter = require("./router/artistRouter.js");
const adminRouter = require("./router/adminRouter.js");
const authRouter = require("./router/authRouter.js");
const checkConnection = require("./libs/checkConnection.js");

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

app.use("/crm-api", authRouter);
app.use("/crm-api/admin", adminRouter);
app.use("/crm-api/artist", artistRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    await checkConnection();
    app.listen(PORT, () =>
      console.log(`Server has been started on port: ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
