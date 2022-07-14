"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "releases",
        key: "id_release",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "acts",
        key: "id_act",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
      },
    });
    /**/

    await queryInterface.changeColumn("videoclips", "fk_id_track", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "tracks",
        key: "id_track",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "releases",
        key: "id_release",
      },
    });

    await queryInterface.changeColumn("videoclips", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "acts",
        key: "id_act",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id_user",
      },
    });
    await queryInterface.changeColumn("albums", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
      },
    });
    await queryInterface.changeColumn("albums", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id_user",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /* references: {
        model: "albums",
        key: "id_album",
      },*/
    });
    await queryInterface.changeColumn("tracks", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "releases",
        key: "id_release",
      },*/
    });
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /* references: {
        model: "albums",
        key: "id_album",
      },*/
    });
    await queryInterface.changeColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*references: {
        model: "acts",
        key: "id_act",
      },*/
    });
    await queryInterface.changeColumn("tracks", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /* references: {
        model: "artists",
        key: "id_artist_contract",
      },*/
    });
    await queryInterface.changeColumn("videoclips", "fk_id_track", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /* references: {
        model: "tracks",
        key: "id_track",
      },*/
    });
    await queryInterface.changeColumn("videoclips", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "albums",
        key: "id_album",
      },*/
    });
    await queryInterface.changeColumn("videoclips", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "releases",
        key: "id_release",
      },*/
    });

    await queryInterface.changeColumn("videoclips", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "acts",
        key: "id_act",
      },*/
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "artists",
        key: "id_artist_contract",
      },*/
    });
    await queryInterface.changeColumn("videoclips", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*  references: {
        model: "users",
        key: "id_user",
      },*/
    });
    await queryInterface.changeColumn("albums", "fk_id_artist", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /* references: {
        model: "artists",
        key: "id_artist_contract",
      },*/
    });
    await queryInterface.changeColumn("albums", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*references: {
        model: "users",
        key: "id_user",
      },*/
    });
  },
};
