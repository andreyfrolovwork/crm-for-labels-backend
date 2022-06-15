const sql = require("../libs/postgres.js");
const ApiError = require("../exceptions/ApiError.js");

class Tokens {
  constructor(token) {
    this.fk_user_id = token.fk_user_id;
    this.refresh_token = token.refresh_token;
    this.#castToTypes();
  }

  #castToTypes() {
    this.id_user = this.id_user ? Number(this.fk_user_id) : undefined;
  }

  #getObj() {
    return {
      fk_user_id: this.fk_user_id,
      refresh_token: this.refresh_token,
    };
  }

  #getObjWithoutId() {
    return {
      refresh_token: this.refresh_token,
    };
  }

  #getPropArray(obj) {
    let token;
    token = this.#getObj();

    let props = [];
    for (let prop in token) {
      if (token[prop] !== undefined) {
        props.push(prop);
      }
    }
    return props;
  }

  async create() {
    try {
      const returningProps = Object.keys(this.#getObj());
      const token = this.#getObj();
      const propArr = this.#getPropArray();
      const createdToken = await sql`insert into tokens ${sql(
        token,
        ...propArr
      )} returning ${sql(returningProps)}`;
      return createdToken;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  async save() {
    try {
      const token = this.#getObj();
      const propArr = this.#getPropArray();
      const savedRes = await sql`update tokens
                   set ${sql(token, ...propArr)}
                   where fk_user_id = ${this.fk_user_id}`;
      return savedRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }
  async saveOrIfExistUpdate() {
    try {
      const token = await sql`select fk_user_id,
                          refresh_token
                   from tokens
                   where fk_user_id = ${this.fk_user_id}
                   limit 1`;
      const tokenIsExist = token.length !== 0;
      if (tokenIsExist) {
        return await this.save();
      } else {
        return await this.create();
      }
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }
  static async removeToken(refreshToken) {
    try {
      const removeRes = await sql`
                delete
                from tokens
                where refresh_token = ${refreshToken}`;
      return removeRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async findToken(ref_token) {
    try {
      const findRes = await sql`
      select fk_user_id, refresh_token
      from tokens
      where refresh_token = ${ref_token} limit 1
    `;
      return findRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async findOneById(id) {
    try {
      const findRes = await sql`select fk_user_id,
                          refresh_token
                   from tokens
                   where fk_user_id = ${id}
                   limit 1`;
      return findRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async getAll() {
    try {
      const allTokens = await sql`select fk_user_id,
                          refresh_token
                   from tokens`;
      return allTokens;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }
}

module.exports = Tokens;
