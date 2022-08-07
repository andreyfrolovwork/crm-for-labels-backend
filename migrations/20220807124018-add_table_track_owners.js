"use strict";
//1
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`create table track_owners (
                                                                        fk_id_track int references tracks(id_track) on update cascade on delete cascade,
                                                                        fk_id_artist_contract int references artists(id_artist_contract) on update  cascade on delete cascade,
                                                                        constraint track_owners_pkey primary key (fk_id_track, fk_id_artist_contract)
                                          )`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`alter table track_owners drop constraint track_owners_pkey`);
    await queryInterface.sequelize.query(`drop table track_owners`);
  },
};
