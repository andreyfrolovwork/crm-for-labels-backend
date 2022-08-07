const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
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
          type: DataTypes.DATEONLY,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.fn("now"),
        },
        share_of_copyright: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        territory_of_rights: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        PO: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        PO_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        UPC: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        ISRC: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        track_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        fk_id_act: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "acts",
            key: "id_act",
          },
        },
        rao: {
          type: DataTypes.ENUM("true", "false"),
          allowNull: true,
          defaultValue: "false",
        },
        voice: {
          type: DataTypes.ENUM("true", "false"),
          allowNull: true,
          defaultValue: "false",
        },
        zaicev: {
          type: DataTypes.ENUM("true", "false"),
          allowNull: true,
          defaultValue: "false",
        },
        mix_upload: {
          type: DataTypes.ENUM("true", "false"),
          allowNull: true,
          defaultValue: "false",
        },
        path_to_mp3: {
          type: DataTypes.STRING(255),
          allowNull: true,
          defaultValue: "NULL",
        },
        dist_ids: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        performer: {
          type: DataTypes.STRING(255),
          allowNull: true,
          defaultValue: "NULL",
        },
        path_to_wav: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        path_to_cover: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        code_po_release_album: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        release_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        release_version: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        release_date: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        sell_start_date: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        release_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copyright_holder: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        genre: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        disk_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        track_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        track_version_subtitle: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copyright_owner: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copyright_owner_rate: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        owner_of_related_rights: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        owner_of_related_rights_rate: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        hide_track: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        meta_data: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        explicit_18: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        track_performer: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        copyright_organisation: {
          type: DataTypes.STRING(255),
          allowNull: true,
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
