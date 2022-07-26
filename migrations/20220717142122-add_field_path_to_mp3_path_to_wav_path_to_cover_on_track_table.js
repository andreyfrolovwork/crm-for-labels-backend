"use strict";
const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("tracks", "record_path", "path_to_mp3");
    await queryInterface.addColumn("tracks", "path_to_wav", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "path_to_cover", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("tracks", "path_to_mp3", "record_path");
    await queryInterface.removeColumn("tracks", "path_to_wav");
    await queryInterface.removeColumn("tracks", "path_to_cover");
  },
};
