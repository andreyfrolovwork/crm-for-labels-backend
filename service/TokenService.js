const jwt = require("jsonwebtoken");
const sql = require("./../models/postgres.js");
const ApiError = require("../exceptions/ApiError.js");

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
      const oldToken = await sql`
                select fk_user_id
                from tokens
                where fk_user_id = ${userId} limit 1
            `;
      const oldTokenIsExist = oldToken.length !== 0;
      if (oldTokenIsExist) {
        const updateToken = await sql`
                    update tokens
                    set refresh_token = ${refreshToken}
                    where fk_user_id = ${userId}
                `;
      } else {
        const insertToken = await sql`
        insert into tokens (fk_user_id, refresh_token)
        values (${userId}, ${refreshToken}) 
        `;
      }
    } catch (e) {
      ApiError.DatabaseError("Ошибка при взаимодействии с базой данных");
    }
  }

  async removeToken(refreshToken) {
    try {
      const oldToken = await sql`
                select fk_user_id, refresh_token
                from tokens
                where refresh_token = '${refreshToken}' limit 1
            `;
      const deleteToken = await sql`
                delete
                from tokens
                where refresh_token = '${refreshToken}' limit 1
            `;
      return oldToken;
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
