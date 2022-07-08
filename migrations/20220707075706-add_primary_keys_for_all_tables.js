"use strict";
const table = "artists";
const tableTo = "users";
const tableToField = "id_user";
const constraintName = "user-has-one-artist";
const constraintFkey = "fk_id_user";

// К этому моменты я удалил все старые  primary keys и constraint и создам их вновь в последующих миграциях

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `alter table users add constraint id_user_pk primary key (id_user)`
    );
    await queryInterface.sequelize.query(
      `alter table artists add constraint id_artist_contract_pk primary key (id_artist_contract)`
    );
    await queryInterface.sequelize.query(
      `alter table acts add constraint id_act_pk primary key (id_act)`
    );
    await queryInterface.sequelize.query(
      `alter table albums add constraint id_album_pk primary key (id_album)`
    );
    await queryInterface.sequelize.query(
      `alter table releases add constraint id_release_pk primary key (id_release)`
    );
    await queryInterface.sequelize.query(
      `alter table tracks add constraint id_track_pk primary key (id_track)`
    );
    await queryInterface.sequelize.query(
      `alter table videoclips add constraint id_videoclip_pk primary key (id_videoclip)`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `alter table users drop constraint id_user_pk`
    );
    await queryInterface.sequelize.query(
      `alter table artists drop constraint id_artist_contract_pk`
    );
    await queryInterface.sequelize.query(
      `alter table acts drop constraint id_act_pk`
    );
    await queryInterface.sequelize.query(
      `alter table albums drop constraint id_album_pk`
    );
    await queryInterface.sequelize.query(
      `alter table releases drop constraint id_release_pk`
    );
    await queryInterface.sequelize.query(
      `alter table tracks drop constraint id_track_pk`
    );
    await queryInterface.sequelize.query(
      `alter table videoclips drop constraint id_videoclip_pk`
    );
  },
};
