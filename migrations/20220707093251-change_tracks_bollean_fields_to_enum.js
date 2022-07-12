"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("tracks", "rao", {
      type: DataTypes.ENUM("true", "false"),
      allowNull: true,
      defaultValue: "false",
    });
    await queryInterface.addColumn("tracks", "voice", {
      type: DataTypes.ENUM("true", "false"),
      allowNull: true,
      defaultValue: "false",
    });
    await queryInterface.addColumn("tracks", "zaicev", {
      type: DataTypes.ENUM("true", "false"),
      allowNull: true,
      defaultValue: "false",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "rao", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
    await queryInterface.removeColumn("tracks", "voice", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
    await queryInterface.removeColumn("tracks", "zaicev", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
  },
};
