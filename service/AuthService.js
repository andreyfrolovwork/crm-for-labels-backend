const UserService = require("./UserService.js");
const ApiError = require("../exceptions/ApiError.js");
const { isEmail, isStrongPassword } = require("validator");

class AuthService {
  async registration(req, res, next) {
    try {
      if (!isEmail(req.body.email)) {
        return next(ApiError.BadRequest("Ошибка при валидации email"));
      }
      if (
        !isStrongPassword(req.body.password, {
          minLength: 8,
          minLowercase: 0,
          minUppercase: 0,
          minNumbers: 0,
          minSymbols: 0,
          returnScore: false,
          pointsPerUnique: 0,
          pointsPerRepeat: 0,
        })
      ) {
        return next(ApiError.BadRequest("Ошибка при валидации password"));
      }
      const { email, password, isArtist } = req.body;
      const userData = await UserService.registration(
        email,
        password,
        isArtist,
        next
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    return next(ApiError.BadRequest("123"));
    /*    try {
      throw ;
      const { email, password } = req.body;
      const userData = await UserService.login(email, password, next);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {
      if (err instanceof ApiError) {
        return res
          .status(err.status)
          .json({ message: err.message, errors: err.errors });
      }
      return res.status(500).json({ message: "Непредвиденная ошибка" });
    }*/
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken, next);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      throw ApiError.UnauthorizedError();
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken, next);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next("123");
    }
  }
}

module.exports = new AuthService();
