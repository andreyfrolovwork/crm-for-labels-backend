"use strict";
const alterTable = "artists";
const constraintName = "user_has_one_artist2";
const constraintFkey = "fk_id_user";
const refTable = "users";
const refField = "id_user";
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
