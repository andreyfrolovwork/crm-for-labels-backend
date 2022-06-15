const sql = require("../libs/postgres.js");

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
    const returningProps = Object.keys(this.#getObj());
    const token = this.#getObj();
    const propArr = this.#getPropArray();
    return sql`insert into tokens ${sql(token, ...propArr)} returning ${sql(
      returningProps
    )}`;
  }

  async save() {
    const token = this.#getObj();
    const propArr = this.#getPropArray();
    return sql`update tokens
                   set ${sql(token, ...propArr)}
                   where fk_user_id = ${this.fk_user_id}`;
  }
  async saveOrIfExistUpdate() {
    const token = await sql`select fk_user_id,
                          refresh_token
                   from tokens
                   where fk_user_id = ${this.fk_user_id}
                   limit 1`;
    const tokenIsExist = token.length !== 0;
    if (tokenIsExist) {
      return this.save();
    } else {
      return this.create();
    }
  }
  static async removeToken(refreshToken) {
    return sql`
                delete
                from tokens
                where refresh_token = ${refreshToken}`;
  }

  static async findToken(ref_token) {
    return sql`
      select fk_user_id, refresh_token
      from tokens
      where refresh_token = ${ref_token} limit 1
    `;
  }

  static async findOneById(id) {
    return sql`select fk_user_id,
                          refresh_token
                   from tokens
                   where fk_user_id = ${id}
                   limit 1`;
  }

  static async getAll() {
    return sql`select fk_user_id,
                          refresh_token
                   from tokens`;
  }
}

module.exports = Tokens;
