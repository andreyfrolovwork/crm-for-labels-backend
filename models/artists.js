const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return artists.init(sequelize, DataTypes);
};

class artists extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id_artist_contract: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        fk_id_user: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id_user",
          },
        },
        creative_pseudonym: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        surname: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        patronymic: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        document: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        inn: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        snils: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        bank_details: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        contract_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        contract_agreement: {
          type: DataTypes.DATEONLY,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.fn("now"),
        },
        contract_fee: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        contract_fee_in_words: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        contract_expiration_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.fn("now"),
        },
        deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "artists",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "artists_pkey",
            unique: true,
            fields: [{ name: "id_artist_contract" }],
          },
          {
            name: "fk_id_user",
            fields: [{ name: "fk_id_user" }],
          },
        ],
      }
    );
  }
}
