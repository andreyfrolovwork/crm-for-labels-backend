/* eslint-disable max-lines,max-len */
// noinspection JSUnusedLocalSymbols,JSUnresolvedFunction

/*(async () => {
  const mysql = require("mysql2/promise");
  const ApiError = require("./exceptions/api-error.js");
  const bcrypt = require("bcrypt");
  const UserDto = require("./dtos/user-dto.js");
  const tokenService = require("./service/token-service.js");
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "db_for_label",
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  async function login(email, password, mysql) {
    let user_;
    try {
      user_ = await mysql.execute(`
    select id_user, email, password from users where email = '${email}' limit 1
    `);
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }

    if (user_[0].length === 0) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const passswordCorrect = await bcrypt.compare(
      password,
      user_[0][0].password
    );
    if (!passswordCorrect) {
      throw ApiError.BadRequest("Неверный пароль");
    }
    const userDto_ = new UserDto({
      email: user_[0][0].email,
      id_user: user_[0][0].id_user,
    });
    const tokens_ = tokenService.generateTokens({ ...userDto_ });
    await tokenService.saveToken(userDto_.id_user, tokens_.refreshToken);
    return { ...tokens_, user: userDto_ };
    /!*const user = await UserModel.findOne({ email });
        if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };*!/
  }

  let resultLogin = await login("iobox4205@gmail.com", "12324", pool);
})();*/
/*(async () => {
  const sql = require("./models/postgres.js");
  try {
    let res = await sql`select * from users`;
    console.log(res);
  } catch (e) {
    debugger;
    console.log(e);
  }
})();*/

/*(async () => {
  /!* const sql = require("./models/postgres.js");*!/
  const initDb = require("./models/postgres.js");
  const sql = await initDb();

  let res = await sql`select * from users`;
  console.log(res); /!*

  setTimeout(() => {
    console.log("inside settimeout1");
  }, 0);

  setTimeout(() => {
    console.log("inside settimeout2");
  }, 0);
  console.log("outside");*!/
})();*/
/*
(async () => {
  class Main {
    static async anotheMethod() {
      console.log("another");
    }

    static async checkthis() {
      console.log("checkthis");
      await this.anotheMethod();
    }
  }

  /!*const main = new Main();*!/

  /!*  Main.checkthis();*!/
  const ApiError = require("./exceptions/ApiError.js");
  const tokenService = require("./service/TokenService.js");
  class AuthMiddleware {
    static async check(req, res, next) {
      try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
          return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
          return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData) {
          return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        return userData;
      } catch (e) {
        return false;
      }
    }

    static async checkArtist(req, res, next) {
      const userData = await this.check(req, res, next);
      if (userData) {
        next();
      } else {
        next(ApiError.UnauthorizedError());
      }
    }

    static async checkAdmin(req, res, next) {
      const userData = await this.check(req, res, next);
      if (userData.role !== "admin") {
        return next(ApiError.NotEnoughRightsError());
      } else if (!userData) {
        next(ApiError.UnauthorizedError());
      } else {
        next();
      }
    }
  }
  /!*AuthMiddleware.checkAdmin();*!/


})();
*/
/*(async () => {
  class People {
    static sayHello() {
      console.log("Hello!");
    }
    static sayHi() {
      this.sayHello();
    }
  }
  People.sayHi(); // hello

  const peopleHi = People.sayHi.bind(People);
  /!*  peopleHi(); //error*!/

  peopleHi();
})();*/

/*(async () => {
  const sql = require("./libs/postgres.js");
  const user = {
    id_user: 5,
    email: "123@mail.ru",
    created_at: "2022-06-03",
    deleted: JSON.parse("false"),
    role: "admin",
  };
  try {
    let res = await sql`
                update users
                set ${sql(user, "email", "created_at", "deleted", "role")}
                where id_user = ${user.id_user}`;
    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
})();*/
/*(async () => {
  const sql = require("./libs/postgres.js");
  const User = require("./models/User.js");
  const _ = require("lodash");
  const moment = require("moment");

  function castToTypes(user) {
    let newUser = { ...user };
    newUser.id_user = Number(user.id_user);
    if (user.deleted === "true") {
      newUser.deleted = true;
    } else if (user.deleted === "false") {
      newUser.deleted = false;
    } else if (typeof user.deleted !== "boolean") {
      newUser.deleted = undefined;
    }

    newUser.created_at = moment(user.created_at).format("YYYY-MM-DD");
    /!* newUser.deleted = JSON.stringify(user.deleted);*!/
    return newUser;
  }

  async function testSave(user) {
    const userFromDb = await sql`select id_user,
                   email,
                   password,
                   created_at,
                   deleted,
                   role
            from users
            where id_user = ${user.id_user} limit 1`;

    const userCasted = castToTypes(userFromDb[0]);
    let u = { ...UserModel };
    console.log("тест", _.isEqual(u, userCasted));
    debugger;
  }

  const user = {
    refresh_token: "123",
  };

  const UserModel = new User(user);

  try {
    const res = await UserModel.save();
    /!*        const users = await User.getAll();*!/
    /!*const u1 = await User.findOneById(5);*!/
    /!* await testSave(user);*!/
    debugger;
  } catch (e) {
    debugger;
    console.log(e);
  }
})();*/
/*(async () => {
  const sql = require("./libs/postgres.js");
  const Token = require("./models/Token.js");
  const User = require("./models/User.js");

  const _ = require("lodash");
  const moment = require("moment");

  const artist = {
    email: "123",
  };

  const ArtistModel = new User(artist);

  try {
    const res = await ArtistModel.create();
    debugger;
  } catch (e) {
    debugger;
    console.log(e);
  }
})();*/
/*
(async () => {
  const sql = require("./libs/postgres.js");
  const Token = require("./models-old/Token.js");

  try {
    const token = new Token({
      fk_user_id: 33,
      refresh_token: "update",
    });
    const res = await token.saveOrIfExistUpdate();
    debugger;
  } catch (e) {
    debugger;
    console.log(e);
  }
})();
*/

/*(async () => {
  const validator = require("validator");
  const date_createdAt = "2022-06-01T19:00:00.000Z";
  const date_updatedAt = "2022-06-29T19:00:00.000Z";

  const res = validator.toDate(date_createdAt);
  const date = new Date(date_createdAt);
  debugger;
})();*/
/*(async () => {
  const { models } = require("./models/models-export.js");
  const axios = require("axios");

  const data = JSON.stringify({
    fk_id_artist_contract: "1",
  });

  const config = {
    url: "http://localhost:5002/crm-api/admin/delete-act?p1=test",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NjE1NTU5NCwiZXhwIjoxNjU5NzU1NTk0fQ.fwbEX3laTHwXjodT2UYOU4EWeT_M7hqTpC3hnutAdi0",
      "Content-Type": "application/json",
      Cookie:
        "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NjE1NTU5NCwiZXhwIjoxNjU5NzU1NTk0fQ.2ljCQjIzi9sxPLd3vZflhECGWa_LUjAWcSotCGTD5yE",
    },
    data: data,
  };
  const rs = await axios.delete(
    "http://localhost:5002/crm-api/admin/delete-act",
    config
  );
  debugger;
  /!*  try {
      const act = await models.acts.update(
        {
          createdAt: "2022-01-01",
        },
        {
          where: {
            id_act: "2",
          },
        }
      );

      debugger;
    } catch (e) {
      console.log(e);
      debugger;
    }*!/
})();*/
// noinspection JSUnusedLocalSymbols,JSCheckFunctionSignatures

/*(async () => {
  const { models } = require("./models/models-export.js");
  try {
    const albums = await models.albums.findAll({
      include: [
        {
          model: models.tracks,
          as: "tracks",
        },
        /!* {
          model: models.artists,
          as: "fk_id_artist_artist",
        },*!/
      ],
    });
    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
})();*/
/*
(async () => {
  const { models } = require("./models/models-export.js");
  try {
    const count = await models.users.count();
    console.log(count);
    async function getUsers(page, limit) {
      function getPage(page, limitForPage) {
        const offset = page * limitForPage - limitForPage;
        return offset;
      }
      const offset = getPage(page, limit);
      return models.users.findAndCountAll({
        offset: offset,
        limit: limit,
      });
    }
    let users = await getUsers(70, 10);

    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
})();*/
/*
(async () => {
  const { models } = require("./models/models-export.js");
  try {
    const artist = await models.artists.findOne({
      where: {
        id_artist_contract: 1,
      },
      include: [
        {
          model: models.acts,
          as: "acts",
          /!*include: [
            {
              model: models.tracks,
              as: "tracks",
            },
            {
              model: models.videoclips,
              as: "videoclips",
            },
          ],*!/
        },
        {
          model: models.tracks,
          as: "tracks",
        },
        {
          model: models.releases,
          as: "releases",
          /!*include: [
            {
              model: models.tracks,
              as: "tracks",
            },
            {
              model: models.videoclips,
              as: "videoclips",
            },
          ],*!/
        },
        {
          model: models.videoclips,
          as: "videoclips",
        },
        {
          model: models.albums,
          as: "albums",
          /!*  include: [
            {
              model: models.tracks,
              as: "tracks",
            },
            {
              model: models.videoclips,
              as: "videoclips",
            },
          ],*!/
        },
      ],
    });

    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }
})();
*/
/*
(async () => {
  require("module-alias/register");
  const { models } = require("@/models/models-export.js");
  try {
    /!*const res = await models.users.destroy({
      where: {
        id_user: 1,
      },
    });*!/
    /!* const res = await models.users.findOne({
      where: {
        id_user: 1,
      },
      include: [
        {
          model: models.acts,
          as: "acts",
        },
      ],
    });*!/
    const res = await models.acts.findOne({
      where: {
        id_act: 78,
      },
      include: [
        {
          model: models.users,
          as: "fk_id_user_user",
        },
      ],
    });
    debugger;
  } catch (e) {
    console.log(e);
    debugger;
  }

  debugger;
})();*/
/*(async () => {
  const { isNumeric } = require("validator");
  const checkRes = isNumeric("123");
  debugger;
})();*/
/*(async () => {
  const { isDate } = require("validator");
  debugger;
  const res = isDate("2022-07-08");

  debugger;
})();*/
/*(async () => {
  const fs = require("fs/promises");
  /!*  fs.rename("file_renamed.js", "file_renamed2.js")
    .then((r) => {
      debugger;
    })
    .catch((e) => {
      console.log(e);
      debugger;
    });*!/
  let res = await fs
    .rename("file_renamed2.js", "file_renamed3.js")
    .catch((error) => {
      debugger;
    });

  debugger;
})();*/

/*(async () => {
  const clearProp = require("./shared/clearProp.js");
  const _ = require("lodash");
  let obj = {
    a: "123",
    b: "null",
  };
  const clear = clearProp(obj, "null");
  debugger;
})();*/

/*(async () => {
  const { models } = require("./models/models-export.js");
  let track = await models.tracks.findOne({
    where: {
      id_track: 1,
    },
  });
  debugger;
  if (track.record_path !== null) {
    debugger;
  }
  track.dist_ids = [1, 2];
  await track.save();
  debugger;
})();*/

/*(async () => {
  const { v1: uuidv1 } = require("uuid");
  console.log(uuidv1());
  /!*  console.log(uuid.v2());
  console.log(uuid.v3());
  console.log(uuid.v4());
  console.log(uuid.v5());*!/
  /!*  const { models } = require("./models/models-export.js");
  let tracks = await models.tracks.findAll();
  debugger;*!/
})();*/

/*(async () => {
  const valid = require("./shared/valid.js");
  const isNumber = require("./shared/checkClass.js");
  try {
    valid([[isNumber, "4", {}, "Field id_act is not numeric"]]);
  } catch (e) {
    console.log(e);
  }
})();*/

const { models } = require("./models/models-export.js");
(async () => {
  const { models } = require("./models/models-export.js");
  let testActs = await models.acts.findOne({
    order: [["id_act", "DESC"]],
  });
  debugger;
})();
