const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");
const sql = require("./models/postgres.js");

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
app.use("/crm-api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await sql`select id_user
                  from users
                  limit 1`;
  } catch (e) {
    throw Error("Ошибка подключения к базе данных");
  }
  try {
    module.exports = sql;
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
