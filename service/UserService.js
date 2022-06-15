const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("./TokenService.js");
const UserDto = require("../dtos/UserDto.js");
const ApiError = require("../exceptions/ApiError.js");
const sql = require("../libs/postgres.js");
const User = require("./../models/User.js");
const Artist = require("./../models/Artist.js");
const Token = require("./../models/Token.js");

/*async function userExistCheck(sql, email) {
  let candidate;
  try {
    candidate = await sql`
            select id_user, email
            from users
            where email = ${email}
        `;
  } catch (e) {
    ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
  }

  if (candidate.length === 0) {
    return false;
  } else {
    throw ApiError.BadRequest(
      `Пользователь с почтовым адресом ${email} уже существует`
    );
    return true;
  }
}

function getRole(isArtist) {
  if (isArtist) {
    return "artist";
  }
  return "admin_not_activated";
}

async function createUser(sql, email, hashPassword, isArtist) {
  try {
    res = await sql`
            insert into users(email, password, role)
            values (${email}, ${hashPassword}, ${getRole(isArtist)})
        `;

    const user = await sql`
            select id_user, email, role
            from users
            where email = ${email}
            limit 1
        `;

    if (isArtist) {
      const artist = await sql`
                insert into artists (fk_id_user)
                values (${user[0].id_user})
            `;
    }
    return {
      id_user: user[0].id_user,
      email: user[0].email,
      role: user[0].role,
    };
  } catch (e) {
    ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
  }
}*/

class UserService {
  async registration(email, password, isArtist) {
    const candidate = await User.findOneByEmail(email);
    if (candidate.length !== 0) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    let newUser;
    if (isArtist) {
      const user = new User({
        email: email,
        password: hashPassword,
      });
      newUser = await user.create();
      const artist = new Artist({
        fk_id_user: newUser[0].id_user,
      });
      const newArtist = await artist.create();
      debugger;
    } else {
      const user = new User({
        email: email,
        password: hashPassword,
        role: "admin_not_activated",
      });
      newUser = await user.create();
    }
    const userDto = new UserDto(newUser[0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id_user, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    let user;
    try {
      /*      user_ = await sql`
                            select id_user, email, password, role
                            from users
                            where email = ${email}
                            limit 1
                        `;*/
      user = await User.findOneByEmail(email);
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }

    if (user.length === 0) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const passswordCorrect = await bcrypt.compare(password, user[0].password);
    if (!passswordCorrect) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const userDto_ = new UserDto({
      email: user[0].email,
      id_user: user[0].id_user,
      role: user[0].role,
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
    /*    const tokenFromDatabase = await sql`
                    select fk_user_id, refresh_token
                    from tokens
                    where refresh_token = ${refreshToken}
                `;*/
    const tokenFromDatabase = await Token.findToken(refreshToken);
    if (!userData || !tokenFromDatabase) {
      throw ApiError.UnauthorizedError();
    }
    let user;
    try {
      /*      user = await sql`
                            select id_user, email, role
                            from users
                            where id_user = ${userData.id_user}
                            limit 1*/
      user = await User.findOneById(userData.id_user);
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }
    const userDto = new UserDto(user[0]);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id_user, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
