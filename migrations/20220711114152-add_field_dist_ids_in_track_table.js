"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("tracks", "dist_ids", {
      type: DataTypes.TEXT,
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("tracks", "dist_ids");
  },
};
