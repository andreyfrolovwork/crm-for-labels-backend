const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const mysql = require("./../models/database.js");

async function userExistCheck(mysql, email) {
  let candidate;
  try {
    candidate = await mysql.execute(`
            select id_user, email
            from users
            where email = '${email}'
        `);
  } catch (e) {
    ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
  }

  if (candidate[0].length === 0) {
    return false;
  } else {
    throw ApiError.BadRequest(
      `Пользователь с почтовым адресом ${email} уже существует`
    );
    return true;
  }
}

async function createUser(mysql, email, hashPassword) {
  try {
    res = await mysql.execute(`
    insert users(email,password)
    values ('${email}','${hashPassword}')
    `);
    const user = await mysql.execute(`
            select id_user, email, role
            from users
            where id_user = '${res[0].insertId}'
            limit 1
        `);
    const artist = await mysql.execute(`
    insert artists (fk_id_user)
    values (${user[0][0].id_user})
    `);
    return {
      id_user: user[0][0].id_user,
      email: user[0][0].email,
      role: user[0][0].role,
    };
  } catch (e) {
    ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
  }
}

class UserService {
  async registration(email, password) {
    await userExistCheck(mysql, email);
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf
    const user = await createUser(mysql, email, hashPassword);
    const userDto = new UserDto(user); // id, email
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id_user, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    let user_;
    try {
      user_ = await mysql.execute(`
                select id_user, email, password, role
                from users
                where email = '${email}'
                limit 1
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
      role: user_[0][0].role,
    });
    const tokens_ = tokenService.generateTokens({ ...userDto_ });
    await tokenService.saveToken(userDto_.id_user, tokens_.refreshToken);
    return { ...tokens_, user: userDto_ };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDatabase = await mysql.execute(`
            select fk_user_id, refresh_token
            from tokens
            where refresh_token = '${refreshToken}'
        `);
    if (!userData || !tokenFromDatabase) {
      throw ApiError.UnauthorizedError();
    }
    let user;
    try {
      user = await mysql.execute(`
                select id_user, email
                from users
                where id_user = ${userData.id_user}
                limit 1
            `);
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }
    const userDto = new UserDto(user[0][0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
