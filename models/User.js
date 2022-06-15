const sql = require("../libs/postgres.js");

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
    const returningProps = Object.keys(this.#getObj());
    const token = this.#getObj();
    const propArr = this.#getPropArray();
    return sql`insert into users ${sql(token, ...propArr)} returning ${sql(
      returningProps
    )}`;
  }

  async save() {
    const users = this.#getObjWithoutId();
    const propArr = this.#getPropArray();
    return sql`update users
                   set ${sql(users, ...propArr)}
                   where id_user = ${this.id_user}`;
  }

  static async findOneById(id) {
    return sql`select id_user,
                          email,
                          password,
                          created_at,
                          deleted,
                          role
                   from users
                   where id_user = ${id}
                   limit 1`;
  }

  static async findOneByEmail(email) {
    return sql`select id_user,
                          email,
                          password,
                          created_at,
                          deleted,
                          role
                   from users
                   where email = ${email}
                   limit 1`;
  }

  static async getAll() {
    return sql`select id_user,
                          email,
                          password,
                          created_at,
                          deleted,
                          role
                   from users`;
  }
}

module.exports = User;
