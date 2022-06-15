const sql = require("../libs/postgres.js");
const ApiError = require("./../exceptions/ApiError.js");

class Artist {
  constructor(artist) {
    this.id_artist_contract = artist.id_artist_contract;
    this.fk_id_user = artist.fk_id_user;
    this.creative_pseudonym = artist.creative_pseudonym;
    this.name_2 = artist.name_2;
    this.name_1 = artist.name_1;
    this.name_3 = artist.name_3;
    this.document = artist.document;
    this.address = artist.address;
    this.email = artist.email;
    this.inn = artist.inn;
    this.snils = artist.snils;
    this.bank_details = artist.bank_details;
    this.contract_number = artist.contract_number;
    this.contract_agreement = artist.contract_agreement;
    this.contract_fee = artist.contract_fee;
    this.contract_fee_in_words = artist.contract_fee_in_words;
    this.contract_expiration_date = artist.contract_expiration_date;
    this.deleted = artist.deleted;
    this.#castToTypes();
  }

  #castToTypes() {
    this.id_artist_contract = this.id_artist_contract
      ? Number(this.id_artist_contract)
      : undefined;
    this.fk_id_user = this.fk_id_user ? Number(this.fk_id_user) : undefined;

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
      id_artist_contract: this.id_artist_contract,
      fk_id_user: this.fk_id_user,
      creative_pseudonym: this.creative_pseudonym,
      name_2: this.name_2,
      name_1: this.name_1,
      name_3: this.name_3,
      document: this.document,
      address: this.address,
      email: this.email,
      inn: this.inn,
      snils: this.snils,
      bank_details: this.bank_details,
      contract_number: this.contract_number,
      contract_agreement: this.contract_agreement,
      contract_fee: this.contract_fee,
      contract_fee_in_words: this.contract_fee_in_words,
      contract_expiration_date: this.contract_expiration_date,
      deleted: this.deleted,
    };
  }

  #getObjWithoutId() {
    return {
      fk_id_user: this.fk_id_user,
      creative_pseudonym: this.creative_pseudonym,
      name_2: this.name_2,
      name_1: this.name_1,
      name_3: this.name_3,
      document: this.document,
      address: this.address,
      email: this.email,
      inn: this.inn,
      snils: this.snils,
      bank_details: this.bank_details,
      contract_number: this.contract_number,
      contract_agreement: this.contract_agreement,
      contract_fee: this.contract_fee,
      contract_fee_in_words: this.contract_fee_in_words,
      contract_expiration_date: this.contract_expiration_date,
      deleted: this.deleted,
    };
  }

  #getPropArray() {
    let artist;
    artist = this.#getObjWithoutId();
    let props = [];
    for (let prop in artist) {
      if (artist[prop] !== undefined) {
        props.push(prop);
      }
    }
    return props;
  }

  async create() {
    try {
      const returningProps = Object.keys(this.#getObj());
      const artist = this.#getObj();
      const propArr = this.#getPropArray();

      const insertArtist = await sql`insert into artists ${sql(
        artist,
        ...propArr
      )} returning ${sql(returningProps)}`;
      return insertArtist;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  async save() {
    try {
      const artist = this.#getObjWithoutId();
      const propArr = this.#getPropArray();
      const returningProps = Object.keys(this.#getObj());
      const save = await sql`update artists
                                   set ${sql(artist, ...propArr)}
                                   where id_artist_contract = ${
                                     this.id_artist_contract
                                   } returning ${sql(returningProps)}`;
      if (save.count !== 1) {
        throw ApiError.DatabaseError("Не сохранилось в базе данных...");
      }
      return save;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async getAboutMe(id_user) {
    try {
      const artistData = await sql`
                select *
                from artists
                where fk_id_user = ${id_user}
                limit 1`;
      if (artistData.length !== 1) {
        throw ApiError.DatabaseError("Search result = nothing");
      }
      return artistData[0];
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async findOneById(id) {
    try {
      const user = await sql`select id_artist_contract,
                                          fk_id_user,
                                          creative_pseudonym,
                                          name_2,
                                          name_1,
                                          name_3,
                                          document,
                                          address,
                                          email,
                                          inn,
                                          snils,
                                          bank_details,
                                          contract_number,
                                          contract_agreement,
                                          contract_fee,
                                          contract_fee_in_words,
                                          contract_expiration_date,
                                          deleted
                                   from artists
                                   where id_artist_contract = ${id}
                                   limit 1`;
      return user;
    } catch (e) {
      throw ApiError.DatabaseError("Database error");
    }
  }

  static async getAll(next) {
    try {
      const users = await sql`select id_artist_contract,
                                           fk_id_user,
                                           creative_pseudonym,
                                           name_2,
                                           name_1,
                                           name_3,
                                           document,
                                           address,
                                           email,
                                           inn,
                                           snils,
                                           bank_details,
                                           contract_number,
                                           contract_agreement,
                                           contract_fee,
                                           contract_fee_in_words,
                                           contract_expiration_date,
                                           deleted
                                    from artists`;
      return users;
    } catch (e) {
      next(e);
      throw ApiError.DatabaseError("Database error");
    }
  }
}

module.exports = Artist;
