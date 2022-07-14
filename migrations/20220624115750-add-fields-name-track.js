"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("tracks", "name", {
      type: DataTypes.STRING(255),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "name");
  },
};
