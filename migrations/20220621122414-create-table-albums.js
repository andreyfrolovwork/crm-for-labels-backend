"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("albums", {
      id_album: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "users",
          key: "id_user",
        },*/
      },
      fk_id_artist: {
        type: DataTypes.INTEGER,
        allowNull: true,
        /* references: {
          model: "artists",
          key: "id_artist",
        },*/
      },
      name: {
        type: DataTypes.STRING(255),
      },
      cover: {
        type: DataTypes.STRING(255),
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
    await queryInterface.dropTable("albums");
  },
};
