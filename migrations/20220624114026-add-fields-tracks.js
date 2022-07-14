"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("tracks", "PO", {
      type: DataTypes.STRING(255),
    });
    await queryInterface.addColumn("tracks", "PO_number", {
      type: DataTypes.STRING(255),
    });
    await queryInterface.addColumn("tracks", "UPC", {
      type: DataTypes.STRING(255),
    });
    await queryInterface.addColumn("tracks", "ISRC", {
      type: DataTypes.STRING(255),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "PO");
    await queryInterface.removeColumn("tracks", "PO_number");
    await queryInterface.removeColumn("tracks", "UPC");
    await queryInterface.removeColumn("tracks", "ISRC");
  },
};
