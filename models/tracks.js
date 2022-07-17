const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return tracks.init(sequelize, DataTypes);
};

class tracks extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id_track: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        fk_id_album: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "albums",
            key: "id_album",
          },
        },
        fk_id_release: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "releases",
            key: "id_release",
          },
        },
        fk_id_act: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "acts",
            key: "id_act",
          },
        },
        fk_id_user: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        fk_id_artist_contract: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "artists",
            key: "id_artist_contract",
          },
        },
        id_for_dmg: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        author_of_music: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        author_of_text: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        phonogram_timing: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        date_of_registration: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        share_of_copyright: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        share_of_related_rights: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        rao: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        voice: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        zaicev: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        mix_upload: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "tracks",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "tracks_pkey",
            unique: true,
            fields: [{ name: "id_track" }],
          },
        ],
      }
    );
  }
}
