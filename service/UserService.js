const bcrypt = require("bcrypt");
const tokenService = require("./TokenService.js");
const UserDto = require("../dtos/UserDto.js");
const ApiError = require("../exceptions/ApiError.js");
const User = require("./../models/User.js");
const Artist = require("./../models/Artist.js");
const Token = require("./../models/Token.js");

class UserService {
  async registration(email, password, isArtist, next) {
    try {
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
    } catch (e) {
      next(e);
    }
  }

  async login(email, password, next) {
    let user;
    try {
      user = await User.findOneByEmail(email);
    } catch (e) {
      next(e);
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

  async logout(refreshToken, next) {
    const token = await tokenService.removeToken(refreshToken, next);
    return token;
  }

  async refresh(refreshToken, next) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);

    const tokenFromDatabase = await Token.findToken(refreshToken);
    if (!userData || !tokenFromDatabase) {
      throw ApiError.UnauthorizedError();
    }
    let user;
    try {
      user = await User.findOneById(userData.id_user);
      const userDto = new UserDto(user[0]);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id_user, tokens.refreshToken, next);
      return { ...tokens, user: userDto };
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserService();
