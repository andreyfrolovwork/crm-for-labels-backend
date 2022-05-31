const jwt = require("jsonwebtoken");
const mysql = require("./../models/database.js");
const ApiError = require("../exceptions/api-error.js");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    try {
      const oldToken = await mysql.execute(`
                select fk_user_id
                from tokens
                where fk_user_id = '${userId}' limit 1
            `);
      const oldTokenIsExist = oldToken[0].length !== 0;
      if (oldTokenIsExist) {
        const updateToken = await mysql.execute(`
                    update tokens
                    set refresh_token = '${refreshToken}'
                    where fk_user_id = ${userId}
                `);
      } else {
        const insertToken = await mysql.execute(`
        insert tokens (fk_user_id, refresh_token)
        values (${userId}, '${refreshToken}') 
        `);
      }
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }
  }

  async removeToken(refreshToken) {
    try {
      const oldToken = await mysql.execute(`
                select fk_user_id, refresh_token
                from tokens
                where refresh_token = '${refreshToken}' limit 1
            `);
      const deleteToken = await mysql.execute(`
                delete
                from tokens
                where refresh_token = '${refreshToken}' limit 1
            `);
      return oldToken[0][0];
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
