"use strict";
const alterTable = "tokens";
const constraintName = "user_has_one_token";
const constraintFkey = "fk_user_id";
const refTable = "users";
const refField = "id_user";
const OnDeleteAction = "CASCADE";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`alter table "${alterTable}"
            add constraint "${constraintName}" foreign key ("${constraintFkey}") references "${refTable}" ("${refField}")
                on update  CASCADE on delete ${OnDeleteAction}`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `alter table ${alterTable} drop constraint ${constraintName}`
    );
  },
};
