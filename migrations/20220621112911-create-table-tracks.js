"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tracks", {
      id_track: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_id_album: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /*references: {
          model: "albums",
          key: "id_album",
        },*/
      },
      fk_id_release: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "releases",
          key: "id_release",
        },*/
      },
      fk_id_act: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "acts",
          key: "id_act",
        },*/
      },
      fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "users",
          key: "id_user",
        },*/
      },
      fk_id_artist: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "artists",
          key: "id_artist",
        },*/
      },
      id_for_dmg: {
        type: DataTypes.STRING(255),
      },
      author_of_music: {
        type: DataTypes.STRING(255),
      },
      author_of_text: {
        type: DataTypes.STRING(255),
      },
      phonogram_timing: {
        type: DataTypes.STRING(255),
      },
      date_of_registration: {
        type: DataTypes.DATE,
      },
      share_of_copyright: {
        type: DataTypes.INTEGER,
      },
      share_of_related_rights: {
        type: DataTypes.INTEGER,
      },
      rao: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      voice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      zaicev: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      mix_upload: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("tracks");
  },
};
