<<<<<<< HEAD
<<<<<<< HEAD
=======
const Sequelize = require('sequelize');
=======
<<<<<<< HEAD
>>>>>>> e9305fda16a4caa1e9f17504be741152f1784b62
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
=======
// noinspection JSUnresolvedFunction,JSUnresolvedVariable

const Sequelize = require("sequelize");
>>>>>>> 380db967db1bb68aa4a787f2f12600e87b034e33
<<<<<<< HEAD
=======
>>>>>>> 48a56f9dd03e662447d2ac6bd666c3978c66f8f4
>>>>>>> e9305fda16a4caa1e9f17504be741152f1784b62
module.exports = (sequelize, DataTypes) => {
  return tracks.init(sequelize, DataTypes);
}

class tracks extends Sequelize.Model {
  static init(sequelize, DataTypes) {
<<<<<<< HEAD
  return super.init({
    id_track: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_album: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'id_album'
=======
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
<<<<<<< HEAD
=======
        fk_id_act: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "acts",
            key: "id_act",
          },
        },
>>>>>>> 380db967db1bb68aa4a787f2f12600e87b034e33
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
<<<<<<< HEAD
          type: DataTypes.STRING,
          allowNull: true,
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
        name: {
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
        record_path: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        dist_ids: {
          type: DataTypes.TEXT,
          defaultValue: null,
        },
        /*dist_ids: {
          type: DataTypes.JSON,
          allowNull: false,
          get() {
            return JSON.parse(this.getDataValue("dist_ids"));
          },
          set(value) {
            return this.setDataValue("dist_ids", JSON.stringify(value));
          },
        },*/
        performers: {
          type: DataTypes.STRING,
          defaultValue: null,
=======
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
>>>>>>> 380db967db1bb68aa4a787f2f12600e87b034e33
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
>>>>>>> 48a56f9dd03e662447d2ac6bd666c3978c66f8f4
      }
    },
    fk_id_release: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'releases',
        key: 'id_release'
      }
    },
    fk_id_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fk_id_artist_contract: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artists',
        key: 'id_artist_contract'
      }
    },
    id_for_dmg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_of_music: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_of_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phonogram_timing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_of_registration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    share_of_copyright: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    share_of_related_rights: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rao: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    voice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    zaicev: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mix_upload: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    PO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PO_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ISRC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fk_id_act: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acts',
        key: 'id_act'
      }
    }
  }, {
    sequelize,
    tableName: 'tracks',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tracks_pkey",
        unique: true,
        fields: [
          { name: "id_track" },
        ]
      },
    ]
  });
  }
}
