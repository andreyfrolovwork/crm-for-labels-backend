"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "mix_upload");
    await queryInterface.addColumn("tracks", "mix_upload", {
      type: DataTypes.ENUM("true", "false"),
      allowNull: true,
      defaultValue: "false",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "mix_upload", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
  },
};
