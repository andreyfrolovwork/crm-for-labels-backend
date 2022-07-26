"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "fk_id_act");
    await queryInterface.addColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      onDelete: "SET NULL",
      onUpdate: "SET NULL",
      references: {
        model: "acts",
        key: "id_act",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "fk_id_act");
    await queryInterface.addColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "acts",
        key: "id_act",
      },
    });
  },
};
