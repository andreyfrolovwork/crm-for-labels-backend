"use strict";
const alterTable = "tracks";
const constraintName = "artist_has_many_tracks";
const constraintFkey = "fk_id_artist_contract";
const refTable = "artists";
const refField = "id_artist_contract";
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
