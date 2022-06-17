const sql = require("../libs/postgres.js");
const ApiError = require("../exceptions/ApiError.js");
const _ = require("lodash");

class User {
  constructor(user) {
    this.id_user = user.id_user;
    this.email = user.email;
    this.password = user.password;
    this.created_at = user.created_at;
    this.deleted = user.deleted;
    this.role = user.role;
    this.#castToTypes();
  }

  #castToTypes() {
    this.id_user = this.id_user ? Number(this.id_user) : undefined;
    if (this.deleted === "true") {
      this.deleted = true;
    } else if (this.deleted === "false") {
      this.deleted = false;
    } else if (typeof this.deleted !== "boolean") {
      this.deleted = undefined;
    }
  }

  #getObj() {
    return {
      id_user: this.id_user,
      email: this.email,
      password: this.password,
      created_at: this.created_at,
      deleted: this.deleted,
      role: this.role,
    };
  }

  #getObjWithoutId() {
    return {
      email: this.email,
      password: this.password,
      created_at: this.created_at,
      deleted: this.deleted,
      role: this.role,
    };
  }

  #getPropArray() {
    let user;
    user = this.#getObj();

    let props = [];
    for (let prop in user) {
      if (user[prop] !== undefined) {
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
      const createdUser = await sql`insert into users ${sql(
        token,
        ...propArr
      )} returning ${sql(returningProps)}`;
      return createdUser;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  async save() {
    try {
      const newUs = _.pickBy(this.#getObjWithoutId(), _.identity);
      const propArr = Object.keys(newUs);
      const returningProps = Object.keys(this.#getObj());
      const saveUser = await sql`update users
                                 set ${sql(newUs, ...propArr)}
                                 where id_user = ${
                                   this.id_user
                                 } returning ${sql(returningProps)}`;
      if (saveUser.count !== 1) {
        throw ApiError.DatabaseError("Nothing has been saved");
      }
      return saveUser;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async findOneById(id) {
    try {
      const findRes = await sql`select id_user,
                                             email,
                                             password,
                                             created_at,
                                             deleted,
                                             role
                                      from users
                                      where id_user = ${id}
                                      limit 1`;
      return findRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async findOneByEmail(email) {
    try {
      const findRes = await sql`select id_user,
                                             email,
                                             password,
                                             created_at,
                                             deleted,
                                             role
                                      from users
                                      where email = ${email}
                                      limit 1`;
      return findRes;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async getAll() {
    try {
      const getAll = await sql`select id_user,
                                            email,
                                            password,
                                            created_at,
                                            deleted,
                                            role
                                     from users`;
      return getAll;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }
}

module.exports = User;
