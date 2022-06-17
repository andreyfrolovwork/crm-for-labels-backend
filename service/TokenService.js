const jwt = require("jsonwebtoken");
const Token = require("./../models/Token.js");

class TokenService {
  generateTokens(payload) {
    // noinspection JSCheckFunctionSignatures
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
    });
    // noinspection JSCheckFunctionSignatures
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  id_artist_contract;

  validateAccessToken(token) {
    try {
      // noinspection JSCheckFunctionSignatures
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      // noinspection JSCheckFunctionSignatures
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken, next) {
    try {
      const token = new Token({
        fk_user_id: userId,
        refresh_token: refreshToken,
      });
      await token.saveOrIfExistUpdate();
    } catch (e) {
      next(e);
    }
  }

  async removeToken(refreshToken, next) {
    try {
      const oldToken = await Token.findToken(refreshToken);
      await Token.removeToken(refreshToken);
      return oldToken;
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TokenService();
