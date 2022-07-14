"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn("artists", "name_1", "name");
    await queryInterface.renameColumn("artists", "name_2", "surname");
    await queryInterface.renameColumn("artists", "name_3", "patronymic");
  },

  async down(queryInterface) {
    await queryInterface.renameColumn("artists", "name", "name_1");
    await queryInterface.renameColumn("artists", "surname", "name_2");
    await queryInterface.renameColumn("artists", "patronymic", "name_3");
  },
};
