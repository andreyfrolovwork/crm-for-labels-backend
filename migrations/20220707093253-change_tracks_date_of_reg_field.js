"use strict";
const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tracks", "date_of_registration", {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn("now"),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tracks", "date_of_registration", {
      type: DataTypes.DATEONLY,
      allowNull: true,
    });
  },
};
