"use strict";
const alterTable = "videoclips";
const constraintName = "acts_has_many_videoclips";
const constraintFkey = "fk_id_act";
const refTable = "acts";
const refField = "id_act";
const OnDeleteAction = "SET NULL";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`alter table "${alterTable}"
            add constraint "${constraintName}" foreign key ("${constraintFkey}") references "${refTable}" ("${refField}")
                on update  restrict on delete ${OnDeleteAction}`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `alter table ${alterTable} drop constraint ${constraintName}`
    );
  },
};
