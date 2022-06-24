"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("releases", {
      id_release: {
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
      fk_id_artist: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "artists",
          key: "id_artist_contract",
        },
      },
      upc: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      code: {
        type: DataTypes.STRING(255),
      },
      territory: {
        type: DataTypes.STRING(255),
      },
      copyright: {
        type: DataTypes.STRING(255),
      },
      note: {
        type: DataTypes.STRING(255),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("releases");
  },
};
