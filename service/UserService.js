const bcrypt = require("bcrypt");
const tokenService = require("./TokenService.js");
const UserDto = require("../dtos/UserDto.js");
const ApiError = require("../exceptions/ApiError.js");
const { models } = require("../models/models-export.js");

class UserService {
  static async registration(email, password, isArtist) {
    try {
      const candidate = await models.users.findOne({
        where: {
          email: email,
        },
      });
      if (candidate) {
        throw ApiError.BadRequest(
          `Пользователь с почтовым адресом ${email} уже существует`
        );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      let newUser;
      if (isArtist) {
        newUser = await models.users.create({
          email: email,
          password: hashPassword,
          role: "artist",
        });
        const artist = await models.artists.create({
          fk_id_user: newUser.id_user,
        });
      } else {
        newUser = await models.users.create({
          email: email,
          password: hashPassword,
          role: "admin_not_activated",
        });
      }
      const userDto = new UserDto(newUser);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id_user, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (e) {
      throw e;
    }
  }

  static async login(email, password, next) {
    let user;
    try {
      user = await models.users.findOne({
        where: {
          email: email,
        },
      });
    } catch (e) {
      next(e);
    }

    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const passswordCorrect = await bcrypt.compare(password, user.password);
    if (!passswordCorrect) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const userDto_ = new UserDto({
      email: user.email,
      id_user: user.id_user,
      role: user.role,
    });
    const tokens_ = tokenService.generateTokens({ ...userDto_ });
    await tokenService.saveToken(userDto_.id_user, tokens_.refreshToken);
    return { ...tokens_, user: userDto_ };
  }

  static async logout(refreshToken, next) {
    const token = await tokenService.removeToken(refreshToken, next);
    return token;
  }

  static async refresh(refreshToken, next) {
    try {
      if (!refreshToken) {
        throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);

      const tokenFromDatabase = await models.tokens.findOne({
        where: {
          refresh_token: refreshToken,
        },
      });
      if (!userData || !tokenFromDatabase) {
        throw ApiError.UnauthorizedError();
      }
      let user;

      user = await models.users.findOne({
        where: {
          id_user: userData.id_user,
        },
      });
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id_user, tokens.refreshToken, next);
      return { ...tokens, user: userDto };
    } catch (e) {
      throw e;
    }
  }
  static async getUsers() {
    return models.users.findAll();
  }

  static async putUser(puttedUser) {
    try {
      const { id_user } = puttedUser;
      delete puttedUser.id_user;
      const user = await models.users.update(puttedUser, {
        where: {
          id_user: id_user,
        },
      });
      if (user[0] === 1) {
        return true;
      } else {
        throw ApiError.DatabaseError("No post has been updated");
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserService;
