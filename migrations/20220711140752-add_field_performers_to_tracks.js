"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("tracks", "performers", {
      type: DataTypes.STRING,
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("tracks", "performers");
  },
};
