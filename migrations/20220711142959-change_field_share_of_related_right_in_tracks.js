"use strict";
const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tracks", "share_of_related_rights", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tracks", "share_of_related_rights", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
  },
};
