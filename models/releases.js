// noinspection JSUnresolvedFunction,JSUnresolvedVariable

const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return releases.init(sequelize, DataTypes);
};

class releases extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id_release: {
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
        fk_id_artist: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "artists",
            key: "id_artist_contract",
          },
        },
        upc: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: "releases_upc_key",
        },
        code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        territory: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copyright: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        note: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "releases",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "releases_pkey",
            unique: true,
            fields: [{ name: "id_release" }],
          },
          {
            name: "releases_upc_key",
            unique: true,
            fields: [{ name: "upc" }],
          },
        ],
      }
    );
  }
}
