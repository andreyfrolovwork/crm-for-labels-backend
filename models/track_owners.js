const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return track_owners.init(sequelize, DataTypes);
};

class track_owners extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        fk_id_track: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "tracks",
            key: "id_track",
          },
        },
        fk_id_artist_contract: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "artists",
            key: "id_artist_contract",
          },
        },
      },
      {
        sequelize,
        tableName: "track_owners",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "track_owners_pkey",
            unique: true,
            fields: [{ name: "fk_id_track" }, { name: "fk_id_artist_contract" }],
          },
        ],
      }
    );
  }
}
