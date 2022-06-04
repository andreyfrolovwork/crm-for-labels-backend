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
