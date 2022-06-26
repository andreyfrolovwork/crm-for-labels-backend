"use strict";

module.exports = {
  async up(qi) {
    await qi.renameColumn("tracks", "fk_id_artist", "fk_id_artist_contract");
    await qi.renameColumn("albums", "fk_id_artist", "fk_id_artist_contract");
    await qi.renameColumn("releases", "fk_id_artist", "fk_id_artist_contract");
    await qi.renameColumn(
      "videoclips",
      "fk_id_artist",
      "fk_id_artist_contract"
    );
  },

  async down(qi) {
    await qi.renameColumn("tracks", "fk_id_artist_contract", "fk_id_artist");
    await qi.renameColumn("albums", "fk_id_artist_contract", "fk_id_artist");
    await qi.renameColumn("releases", "fk_id_artist_contract", "fk_id_artist");
    await qi.renameColumn(
      "videoclips",
      "fk_id_artist_contract",
      "fk_id_artist"
    );
  },
};
