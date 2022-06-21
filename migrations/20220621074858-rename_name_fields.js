"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn("artists", "name_1", "name");
    queryInterface.renameColumn("artists", "name_2", "surname");
    queryInterface.renameColumn("artists", "name_3", "patronymic");
  },

  async down(queryInterface, Sequelize) {
    queryInterface.renameColumn("artists", "name", "name_1");
    queryInterface.renameColumn("artists", "surname", "name_2");
    queryInterface.renameColumn("artists", "patronymic", "name_3");
  },
};
