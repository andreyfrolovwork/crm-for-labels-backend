"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(qi) {
    await qi.addColumn("artists", "deleted", {
      type: DataTypes.ENUM("true", "false"),
      allowNull: true,
      defaultValue: "false",
    });
  },

  async down(qi) {
    await qi.addColumn("artists", "deleted", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
  },
};
