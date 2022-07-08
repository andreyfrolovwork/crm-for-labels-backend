"use strict";
const alterTable = "videoclips";
const constraintName = "releases_has_many_videoclips";
const constraintFkey = "fk_id_release";
const refTable = "releases";
const refField = "id_release";
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
