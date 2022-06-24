"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("videoclips", {
      id_videoclip: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_id_track: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /*references: {
          model: "tracks",
          key: "id_track",
        },*/
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
      code: {
        type: DataTypes.STRING(255),
      },
      title: {
        type: DataTypes.STRING(255),
      },
      author_of_text: {
        type: DataTypes.STRING(255),
      },
      author_of_music: {
        type: DataTypes.STRING(255),
      },
      phonogram_timing: {
        type: DataTypes.STRING(255),
      },
      director_screenwriter: {
        type: DataTypes.STRING(255),
      },
      country_of_origin: {
        type: DataTypes.STRING(255),
      },
      territory_video: {
        type: DataTypes.STRING(255),
      },
      age_category: {
        type: DataTypes.STRING(255),
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
    await queryInterface.dropTable("videoclips");
  },
};
