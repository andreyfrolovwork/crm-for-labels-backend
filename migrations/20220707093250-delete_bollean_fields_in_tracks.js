"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "rao");
    await queryInterface.removeColumn("tracks", "voice");
    await queryInterface.removeColumn("tracks", "zaicev");
  },

  async down(queryInterface, Sequelize) {},
};
