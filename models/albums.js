// noinspection JSUnresolvedFunction,JSUnresolvedVariable

const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return albums.init(sequelize, DataTypes);
};

class albums extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id_album: {
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
        fk_id_artist_contract: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "artists",
            key: "id_artist_contract",
          },
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        cover: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "albums",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "albums_pkey",
            unique: true,
            fields: [{ name: "id_album" }],
          },
        ],
      }
    );
  }
}
