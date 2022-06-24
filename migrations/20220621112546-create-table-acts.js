"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("acts", {
      id_act: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id_user",
        },
      },
      fk_id_artist_contract: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artists",
          key: "id_artist_contract",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("acts");
  },
};
